'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6a08bfdcd2c884a80ed738dc1a5f217a",
"assets/assets/icons/apple.svg": "d53e36c55ebff4c48f3b797b0d7602fe",
"assets/assets/icons/avatar.png": "fddd6b24fba7996d511099717d5ea498",
"assets/assets/icons/facebook.svg": "474e66f9fa913b73813fcc0f5bf0b5cd",
"assets/assets/icons/google.svg": "686f8efa6e3e28e96d1c08399e8d353d",
"assets/assets/icons/logo.png": "c8e66d811aec4ea737bfcd9c9f5b7ef0",
"assets/assets/images/add_products.png": "850d2943db96d0b332b71a3905735d09",
"assets/assets/images/Bankaccount.png": "88ca9273b35b882edd28f88307ac4a50",
"assets/assets/images/coupon.png": "a24a000c4b12a8e80298342a4216a2d3",
"assets/assets/images/Easypaisa.png": "26215eb414c42daff4f53d5f49c2e8b2",
"assets/assets/images/facebook.png": "870a6bd0c448f16b0aa0d264fa79b98b",
"assets/assets/images/Googleplus.png": "563876b86d56f366e104e3104404884b",
"assets/assets/images/home.png": "9892c8ff01f9ba636f8345ee4ddec4a8",
"assets/assets/images/imageicons.png": "b9d527b84f030ebbdb9f8aeeb133470a",
"assets/assets/images/Instagram.png": "808a181b9f7b7e4a31699503cc5dc917",
"assets/assets/images/Jazzcash.png": "d24f11e86a883924befd42bbad5bc29c",
"assets/assets/images/lap1.jpg": "14de7f9dd6b5014f3704172f887686ab",
"assets/assets/images/lap2.jpg": "48183761474b5acd6ea4c2ef6843652b",
"assets/assets/images/lap3.jpg": "ddc3bb751f8dbba0dca8d5439f074f84",
"assets/assets/images/lap4.jpg": "5493f9cd969bc5f95e8ab68bb377fbd2",
"assets/assets/images/lap5.jpg": "7c794db30b21b642b3873d520b8f8f70",
"assets/assets/images/Linkedin.png": "b460122645cc4b10af87c5d589468a10",
"assets/assets/images/Logo.png": "a1f0fda3aee241a242fc8c964975a807",
"assets/assets/images/media.png": "07a44c421bd01b57a8d27eb49845d7e3",
"assets/assets/images/Orders.png": "4907a2e6c6bc6bd9d2da5cc47f00a8bb",
"assets/assets/images/Payments.png": "16b70a62af862c9dfe117b87ae8982c2",
"assets/assets/images/person.png": "635bb26dbaa8be6cf63f6ae8cc4ed031",
"assets/assets/images/Pininterest.png": "ca6eb910abbffb77c7f252da73172b8f",
"assets/assets/images/products.png": "13c7ac887ea891430b0fbacbd2b44bce",
"assets/assets/images/Profile.png": "66f051e8a097d1b24079addb3c5374fc",
"assets/assets/images/Rate_us.png": "f6d865097be4f7e3977bd228734bf2ad",
"assets/assets/images/refund_request.png": "a13aea27195d900efe4e9ef312968109",
"assets/assets/images/samsung.jpg": "241e19a094af698cac91e5ad6d3671fc",
"assets/assets/images/settings.png": "f81b578186b90629dcd9db658c0d0856",
"assets/assets/images/Snapchat.png": "1d21c1e62d651fa3e84712041b5d1f72",
"assets/assets/images/twitter.png": "f2738f5453d7c048752ac77998f12926",
"assets/assets/images/wrapper1.png": "2be49d59204c8295e65208c7023a1959",
"assets/assets/images/wrapper2.png": "ea0ae1dbe6303b7ffbfa21b06f9bdb77",
"assets/assets/images/wrapper3.png": "6d25f948a5103008d03fb7a18bd70851",
"assets/assets/images/youtube.png": "4f788b64cb9da64cdf798c2cc357d995",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "da9f7b1e137e265d3363823abe89054b",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "38cce25f764969c717883eaa1fff8ee6",
"/": "38cce25f764969c717883eaa1fff8ee6",
"main.dart.js": "822f2d75ca724326c20e25d8f18a436e",
"manifest.json": "d1d99f425702068b445cc562b26f2fe2",
"version.json": "38c46cd10ba542de3f7d6f5853d90c1d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
