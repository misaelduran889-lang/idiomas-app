const CACHE = "mi-tutor-v13";
const ARCHIVOS = ["./", "./index.html", "./manifest.json", "./icon.svg",
  "./img/fondo-llamada.jpg", "./img/cabecera-ruta.jpg", "./img/fondo-hoy.jpg",
  "./img/fondo-repasar.jpg", "./img/fondo-mapa.jpg", "./img/celebracion.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Primero caché; si no está, pide a la red y guarda una copia de los archivos propios.
// Sin red y sin copia, muestra la app principal.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
    if (res.ok && new URL(e.request.url).origin === location.origin) {
      const copia = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copia));
    }
    return res;
  }).catch(() => caches.match("./index.html"))));
});
