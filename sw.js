importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

if (workbox) {
  workbox.routing.registerRoute(
    new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.networkFirst(),
  );
  
  workbox.routing.registerRoute(
    new RegExp('^https://cdn\.glitch\.com/.*'),
    workbox.strategies.networkFirst(),
  );
  
  workbox.routing.registerRoute(
    '/',
    workbox.strategies.networkFirst()
  );
  
   workbox.routing.registerRoute(
    /\.(?:js|css|json)$/,
    workbox.strategies.networkFirst()
  ); 
}