const CACHE = "mi-tutor-v25";
const ARCHIVOS = ["./", "./index.html", "./manifest.json", "./icon.svg",
  "./img/fondo-llamada.jpg", "./img/cabecera-ruta.jpg", "./img/fondo-hoy.jpg",
  "./img/fondo-repasar.jpg", "./img/fondo-mapa.jpg", "./img/celebracion.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const mismoOrigen = url.origin === location.origin;
  const esCodigo = req.mode === "navigate" || /\.(html|js|json)$/.test(url.pathname) || url.pathname.endsWith("/");

  if (mismoOrigen && esCodigo) {
    // Página y código: primero la red, así una recarga trae siempre la versión nueva.
    // Sin conexión, usa la copia guardada.
    e.respondWith(fetch(req).then(res => {
      if (res.ok) { const copia = res.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match("./index.html"))));
    return;
  }

  // Imágenes y otros archivos: primero la copia guardada, luego la red.
  e.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => {
    if (res.ok && mismoOrigen) { const copia = res.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
    return res;
  })));
});
