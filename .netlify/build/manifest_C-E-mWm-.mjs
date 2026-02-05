import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_BrdSLPjh.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/kevin/Bureau/test_materail/slamm_2/","cacheDir":"file:///home/kevin/Bureau/test_materail/slamm_2/node_modules/.astro/","outDir":"file:///home/kevin/Bureau/test_materail/slamm_2/dist/","srcDir":"file:///home/kevin/Bureau/test_materail/slamm_2/src/","publicDir":"file:///home/kevin/Bureau/test_materail/slamm_2/public/","buildClientDir":"file:///home/kevin/Bureau/test_materail/slamm_2/dist/","buildServerDir":"file:///home/kevin/Bureau/test_materail/slamm_2/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"cours/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cours","isIndex":false,"type":"page","pattern":"^\\/cours\\/?$","segments":[[{"content":"cours","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cours.astro","pathname":"/cours","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"equipe/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/equipe","isIndex":false,"type":"page","pattern":"^\\/equipe\\/?$","segments":[[{"content":"equipe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/equipe.astro","pathname":"/equipe","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"evenements/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/evenements","isIndex":false,"type":"page","pattern":"^\\/evenements\\/?$","segments":[[{"content":"evenements","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/evenements.astro","pathname":"/evenements","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"hygiene/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/hygiene","isIndex":false,"type":"page","pattern":"^\\/hygiene\\/?$","segments":[[{"content":"hygiene","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hygiene.astro","pathname":"/hygiene","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"mentions-legales/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/mentions-legales","isIndex":false,"type":"page","pattern":"^\\/mentions-legales\\/?$","segments":[[{"content":"mentions-legales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mentions-legales.astro","pathname":"/mentions-legales","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://mma-saint-lunaire.fr","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/kevin/Bureau/test_materail/slamm_2/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/kevin/Bureau/test_materail/slamm_2/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/kevin/Bureau/test_materail/slamm_2/src/pages/cours.astro",{"propagation":"none","containsHead":true}],["/home/kevin/Bureau/test_materail/slamm_2/src/pages/equipe.astro",{"propagation":"none","containsHead":true}],["/home/kevin/Bureau/test_materail/slamm_2/src/pages/evenements.astro",{"propagation":"none","containsHead":true}],["/home/kevin/Bureau/test_materail/slamm_2/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["/home/kevin/Bureau/test_materail/slamm_2/src/pages/hygiene.astro",{"propagation":"none","containsHead":true}],["/home/kevin/Bureau/test_materail/slamm_2/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/kevin/Bureau/test_materail/slamm_2/src/pages/mentions-legales.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/cours@_@astro":"pages/cours.astro.mjs","\u0000@astro-page:src/pages/equipe@_@astro":"pages/equipe.astro.mjs","\u0000@astro-page:src/pages/evenements@_@astro":"pages/evenements.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/hygiene@_@astro":"pages/hygiene.astro.mjs","\u0000@astro-page:src/pages/mentions-legales@_@astro":"pages/mentions-legales.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C-E-mWm-.mjs","/home/kevin/Bureau/test_materail/slamm_2/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","/home/kevin/Bureau/test_materail/slamm_2/src/components/Accordion.jsx":"_astro/Accordion.B6IiQj50.js","/home/kevin/Bureau/test_materail/slamm_2/src/components/Menu.jsx":"_astro/Menu.DeMVjFka.js","/home/kevin/Bureau/test_materail/slamm_2/src/components/FloatingTrialButton.jsx":"_astro/FloatingTrialButton.CkOi9nL4.js","/home/kevin/Bureau/test_materail/slamm_2/src/components/CustomCursor.jsx":"_astro/CustomCursor.C5gPJ9Ke.js","/home/kevin/Bureau/test_materail/slamm_2/src/components/LeafletMap.jsx":"_astro/LeafletMap._YnQmjHd.js","@astrojs/react/client.js":"_astro/client.PWbBjEwf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/ibm-plex-mono-cyrillic-ext-300-normal.BbtBtHoB.woff2","/_astro/ibm-plex-mono-cyrillic-300-normal.ByB2hQUF.woff2","/_astro/ibm-plex-mono-vietnamese-300-normal.CpdbWO_2.woff2","/_astro/ibm-plex-mono-latin-ext-300-normal.BEtQ2wm2.woff2","/_astro/ibm-plex-mono-latin-300-normal.BRS-C4KA.woff2","/_astro/ibm-plex-mono-cyrillic-ext-400-normal.xuaO2J-f.woff2","/_astro/ibm-plex-mono-cyrillic-400-normal.BSMlKf0J.woff2","/_astro/ibm-plex-mono-vietnamese-400-normal.BulugwFq.woff2","/_astro/ibm-plex-mono-latin-ext-400-normal.BmRBH3aV.woff2","/_astro/ibm-plex-mono-latin-400-normal.DMJ8VG8y.woff2","/_astro/ibm-plex-mono-cyrillic-ext-500-normal.BqneJy0T.woff2","/_astro/ibm-plex-mono-cyrillic-500-normal.Bq9vWWag.woff2","/_astro/ibm-plex-mono-vietnamese-500-normal.DZ4AoWbu.woff2","/_astro/ibm-plex-mono-latin-ext-500-normal.CAhNIIs5.woff2","/_astro/ibm-plex-mono-cyrillic-600-normal.CTOM6hUh.woff2","/_astro/ibm-plex-mono-cyrillic-ext-600-normal.V-xxqcpd.woff2","/_astro/ibm-plex-mono-latin-500-normal.DSY6xOcd.woff2","/_astro/ibm-plex-mono-vietnamese-600-normal.D2EvbN8M.woff2","/_astro/ibm-plex-mono-latin-ext-600-normal.D38SheWl.woff2","/_astro/ibm-plex-mono-latin-600-normal.BgSNZQsw.woff2","/_astro/ibm-plex-mono-cyrillic-ext-700-normal.BDQ-w_bc.woff2","/_astro/ibm-plex-mono-cyrillic-700-normal.Bp80XfeI.woff2","/_astro/ibm-plex-mono-vietnamese-700-normal.apsD3J7v.woff2","/_astro/ibm-plex-mono-latin-ext-700-normal.Dhimjc7-.woff2","/_astro/ibm-plex-mono-latin-700-normal.7sUh57Bg.woff2","/_astro/ibm-plex-mono-cyrillic-ext-300-normal.B8O3uHbr.woff","/_astro/ibm-plex-mono-cyrillic-300-normal.Ba-HN6uq.woff","/_astro/ibm-plex-mono-vietnamese-300-normal.B6fSpYYV.woff","/_astro/ibm-plex-mono-latin-ext-300-normal.CQbCaAQ4.woff","/_astro/ibm-plex-mono-latin-300-normal.BPU54Tw3.woff","/_astro/ibm-plex-mono-cyrillic-ext-400-normal.DMdlQ8Kv.woff","/_astro/ibm-plex-mono-cyrillic-400-normal.CEL4l2ZJ.woff","/_astro/ibm-plex-mono-vietnamese-400-normal.DDuiU_S-.woff","/_astro/ibm-plex-mono-latin-ext-400-normal.D3D2R8hC.woff","/_astro/ibm-plex-mono-latin-400-normal.CvHOgSBP.woff","/_astro/ibm-plex-mono-cyrillic-ext-500-normal.BIfNGwUT.woff","/_astro/ibm-plex-mono-cyrillic-500-normal.Ael50iVv.woff","/_astro/ibm-plex-mono-vietnamese-500-normal.C8zxqsMH.woff","/_astro/ibm-plex-mono-latin-ext-500-normal.CZ70TYgx.woff","/_astro/ibm-plex-mono-cyrillic-600-normal.fLZuRloM.woff","/_astro/ibm-plex-mono-cyrillic-ext-600-normal.9HEixskS.woff","/_astro/ibm-plex-mono-latin-500-normal.CB9ihrfo.woff","/_astro/ibm-plex-mono-vietnamese-600-normal.iLQfcSjf.woff","/_astro/ibm-plex-mono-latin-ext-600-normal.DmB0ttJJ.woff","/_astro/ibm-plex-mono-latin-600-normal.DWFSQ4vo.woff","/_astro/ibm-plex-mono-cyrillic-ext-700-normal.CtgKGIh5.woff","/_astro/ibm-plex-mono-cyrillic-700-normal.O_YjL27c.woff","/_astro/ibm-plex-mono-vietnamese-700-normal.Bs14ezHR.woff","/_astro/ibm-plex-mono-latin-ext-700-normal.Cwsjk1Jb.woff","/_astro/ibm-plex-mono-latin-700-normal.CNHXzs6v.woff","/_astro/contact.A8-a5Ug_.css","/CNAME","/favicon.ico","/favicon.svg","/robots.txt","/sitemap.xml","/_astro/Accordion.B6IiQj50.js","/_astro/CustomCursor.C5gPJ9Ke.js","/_astro/FloatingTrialButton.CkOi9nL4.js","/_astro/LeafletMap.CIGW-MKW.css","/_astro/LeafletMap._YnQmjHd.js","/_astro/Menu.DeMVjFka.js","/_astro/client.PWbBjEwf.js","/_astro/createLucideIcon.DwOHoU2G.js","/_astro/index.DeO6U63H.js","/_astro/index.DrlE4MoQ.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/urls.BcXi5JDi.js","/fonts/ibm-plex-mono-v19-latin-100.woff2","/fonts/ibm-plex-mono-v19-latin-200.woff2","/fonts/ibm-plex-mono-v19-latin-300.woff2","/fonts/ibm-plex-mono-v19-latin-500.woff2","/fonts/ibm-plex-mono-v19-latin-600.woff2","/fonts/ibm-plex-mono-v19-latin-700.woff2","/fonts/ibm-plex-mono-v19-latin-regular.woff2","/fonts/ibm-plex-mono.css","/img/events/jonathan.jpg","/img/events/stage_1.webp","/img/partenaires/ffl.png","/img/partenaires/fmmaf.webp","/img/partenaires/logo.webp","/img/partenaires/progress.webp","/img/partenaires/rdx.webp","/img/partenaires/stlunaire.webp","/img/leaflet/marker-icon-2x.png","/img/leaflet/marker-icon.png","/img/leaflet/marker-shadow.png","/img/social/social.jpg","/img/team/cage.webp","/img/team/miguel.webp","/img/team/photo1_scale,w_1104.webp","/img/team/photo1_scale,w_1314.webp","/img/team/photo1_scale,w_1400.webp","/img/team/photo1_scale,w_200.webp","/img/team/photo1_scale,w_400.webp","/img/team/photo1_scale,w_525.webp","/img/team/photo1_scale,w_704.webp","/img/team/photo1_scale,w_914.webp","/img/team/team.webp","/img/team2/cours_2025-2026.webp","/img/team2/cours_2025-2026_scale,w_1266.webp","/img/team2/cours_2025-2026_scale,w_1400.webp","/img/team2/cours_2025-2026_scale,w_200.webp","/img/team2/cours_2025-2026_scale,w_637.webp","/img/team2/cours_2025-2026_scale,w_955.webp","/img/team2/equipe1_scale,w_1266.webp","/img/team2/equipe1_scale,w_1400.webp","/img/team2/equipe1_scale,w_200.webp","/img/team2/equipe1_scale,w_637.webp","/img/team2/equipe1_scale,w_955.webp","/404.html","/contact/index.html","/cours/index.html","/equipe/index.html","/evenements/index.html","/faq/index.html","/hygiene/index.html","/mentions-legales/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"m+4tKf4G+njdOgr4ggzlcU0MtJu/dgStknkFUGK0Eyk=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
