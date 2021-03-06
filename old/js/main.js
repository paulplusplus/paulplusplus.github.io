//Main javascript file
//First, register our service worker
//Make sure service workers are supported

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw_cached_site.js')
      .then(reg => console.log('Service Worker Registered'))
      .catch(err => console.error(`SW Error: ${err}`));
  });
}
