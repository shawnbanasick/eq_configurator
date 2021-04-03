import appState from "../../GlobalState/appState";

const generateServiceWorker = () => {
  function makeid(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const cacheName = makeid(9);
  console.log(cacheName);

  let data = `
  // Files to cache
const cacheName = "${cacheName}";
const appShellFiles = [
  "/",
  "index.html",
  "favicon.ico",

  "src/angular-ui-router.min.js",
  "src/angular.min.js",
  "src/bootstrap.min.js",
  "src/htmlq.js",
  "src/jquery-dateFormat.min.js",
  "src/jquery-ui.min.js",
  "src/jquery.min.js",
  "src/jquery-ui.touch-punch.min.js",
  "src/jsonpath.js",
  "src/respond.min.js",
  "src/ui-bootstrap-custom-tpls.min.js",
  "src/underscore-min.js",
  "src/xml2json.min.js",

  "settings/config.xml",
  "settings/language.xml",
  "settings/map.xml",
  "settings/statements.xml",

  "fonts/glyphicons-halflings-regular.eot",
  "fonts/glyphicons-halflings-regular.svg",
  "fonts/glyphicons-halflings-regular.ttf",
  "fonts/glyphicons-halflings-regular.woff",

  "templates/dropEventText.html",
  "templates/empty.html",
  "templates/login.html",
  "templates/modal.html",
  "templates/print.html",
  "templates/root.html",
  "templates/step1.html",
  "templates/step2.html",
  "templates/step3.html",
  "templates/step4.html",
  "templates/step5.html",
  "templates/submit.html",
  "templates/thanks.html",

  "stylesheets/bootstrap.min.css",
  "stylesheets/htmlq.css",

  "touch-icon-ipad.png",
  "touch-icon-ipad-retina.png",
  "apple-launch-2048x2732.png",
  "apple-launch-1668x2388.png",
  "apple-launch-1668x2224.png",
];

// Installing Service Worker
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache
        .addAll(appShellFiles)
        .then(() => {
          // At this point, 'cache' will be populated with 'Response' objects,
          // and 'requests' contains the 'Request' objects that were used.
        })
        .catch((error) => console.error("load fail! " + {error}));
    })()
  );
});

// Fetching content using Service Worker
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log("Fetching resource");
      if (r) return r;
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log("Caching new resource");
      cache.put(e.request, response.clone());
      return response;
    })()
  );
});
  
`;

  return data;
};

export default generateServiceWorker;
