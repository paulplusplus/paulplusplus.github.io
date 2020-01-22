const cacheName = 'v1'; //Call v1 - you might have different versions
//Lets work with caching - we need to cache our stuff
const cacheAssets = [
  //Method one for caching assets - good for small sites
  'index.html',
  'about.html',
  '/css/style.css',
  '/js/main.js',
  'internet_web_browser.png'
];

//Service worker
//Call install event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
  //Lets cache our files
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

//Call Activate event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  //Remove old or unwanted caches

  e.waitUntil(
    caches
      .keys() //We'll loop through our cache keys
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            if (cache !== cacheName) {
              console.log('Service Worker: Clearing old cache');
              return caches.delete(cache);
            }
          })
        );
      })
  );
});

self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  //First, lets check if the live site is available.
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); //caches.match tries to match a request for example, index.html, with something in the cache.
});
