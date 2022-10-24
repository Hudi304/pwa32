const cacheName = "pwa-conf-v1";
const staticAssets = [
  "./",
  "./index.html",
  "./about.html",
  "./car-details.html",
  "./cars.html",
  "./dashboard.html",
  "./login.html",
  "./services.html",
  "./js/app.js",
  "./style.css",
];

self.addEventListener("install", async (event) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});
self.addEventListener("fetch", (event) => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(req);
  return cachedResponse || fetch(req);
}

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
);
