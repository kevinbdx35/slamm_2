import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_C-E-mWm-.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/contact.astro.mjs');
const _page2 = () => import('./pages/cours.astro.mjs');
const _page3 = () => import('./pages/equipe.astro.mjs');
const _page4 = () => import('./pages/evenements.astro.mjs');
const _page5 = () => import('./pages/faq.astro.mjs');
const _page6 = () => import('./pages/hygiene.astro.mjs');
const _page7 = () => import('./pages/mentions-legales.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/contact.astro", _page1],
    ["src/pages/cours.astro", _page2],
    ["src/pages/equipe.astro", _page3],
    ["src/pages/evenements.astro", _page4],
    ["src/pages/faq.astro", _page5],
    ["src/pages/hygiene.astro", _page6],
    ["src/pages/mentions-legales.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "95476b18-1751-4174-9063-212f3d04512a"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
