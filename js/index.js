//Script to control our little menu
const menuController = () => {
  const hamburger = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    links.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
  });
  console.log('If you can read this, you like web dev :)');
};

menuController();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw_cached_site.js')
      .then(reg => console.log('Service Worker Registered'))
      .catch(err => console.error(`SW Error: ${err}`));
  });
}
