import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router-dom/server';
import * as HelmetAsync from 'react-helmet-async';
const { HelmetProvider } = HelmetAsync;
import App from './App.jsx';

export function render(url, context) {
    return renderToString(
        <StrictMode>
            <HelmetProvider context={context}>
                <StaticRouter location={url}>
                    <App />
                </StaticRouter>
            </HelmetProvider>
        </StrictMode>
    );
}
