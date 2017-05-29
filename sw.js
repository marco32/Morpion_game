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
'css/bootstrap.min.css',
'js/jquery.min.js'
]
self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
		})
	);
});