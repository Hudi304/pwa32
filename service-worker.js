
//? import from CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    //? the PWA will try to read the cache first before going over the network 
    // new workbox.strategies.CacheFirst()

    //? the PWA will try to read the cache first before going over the network 
    new workbox.strategies.NetworkFirst()
);