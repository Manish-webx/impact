import fs from 'node:fs/promises';
import express from 'express';

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Cached production assets
const templateHtml = isProduction
    ? await fs.readFile('./dist/client/index.html', 'utf-8')
    : '';
const ssrManifest = isProduction
    ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
    : undefined;

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
    const { createServer } = await import('vite');
    vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
        base,
    });
    app.use(vite.middlewares);
} else {
    const compression = (await import('compression')).default;
    const sirv = (await import('serve-static')).default;
    app.use(compression());
    app.use(base, sirv('./dist/client', { extensions: [], index: false }));
}

// Serve HTML
app.use(async (req, res) => {
    try {
        let url = req.originalUrl.replace(base, '');
        if (!url.startsWith('/')) url = '/' + url;

        let template;
        let render;
        if (!isProduction) {
            // Always read fresh template in dev
            template = await fs.readFile('./index.html', 'utf-8');
            template = await vite.transformIndexHtml(url, template);
            render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
        } else {
            template = templateHtml;
            render = (await import('./dist/server/entry-server.js')).render;
        }

        const context = {};
        const appHtml = render(url, context);

        if (context.url) {
            // Somewhere a `<Navigate>` was rendered
            return res.redirect(301, context.url);
        }

        const { helmet } = context;

        // Inject Helmet data
        const helmetHead = `
      ${helmet.title.toString()}
      ${helmet.priority.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.script.toString()}
    `;

        const html = template
            .replace(`__SSR_OUTLET__`, appHtml)
            .replace(`<script id="ssr-helmet-placeholder"></script>`, helmetHead);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
        vite?.ssrFixStacktrace(e);
        console.log(e.stack);
        res.status(500).end(e.stack);
    }
});

// Export for Vercel
export default app;

// Start http server if not importing
if (import.meta.url === `file://${process.argv[1]}`) {
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
}
