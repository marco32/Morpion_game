self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			return cache.addAll(filesToCache);
		})
	);
});
var cacheName="pwa";
var filesToCache=[
'/',
'index.html',
'js/app.js',
'css/style.css',
'node_modules/bootstrap/dist/css/bootstrap.min.css',
'node_modules/jquery/dist/jquery.min.js'
]
self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
		})
	);
});