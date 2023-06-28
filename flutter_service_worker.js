'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bbb7e9738da27040b11f56ec9357f30f",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".git/config": "7a20c959fba02fe8901a095e84c5d046",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/logs/HEAD": "9c954848435f67c25e2394c4180e510c",
".git/logs/refs/remotes/origin/main": "8f1bac9b605363975de0934b8c704dd5",
".git/logs/refs/heads/main": "9c954848435f67c25e2394c4180e510c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/FETCH_HEAD": "aba6298a1160b64ed64be68e30a6de75",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "ef5d9f4e014a28328636543b0bcce7d4",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/a2/3ec3af9ac66ac364010664d10094735eeb8f20": "8bdc6ca76115c9f392f3103f6ce12f21",
".git/objects/a2/3a7cb2e73c2726f82263cffe97be6aebc9dfb0": "fbef65ef462f19d9b0142f86c4d1e84a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/e7/d2392a4db93f2bb71b30fdf4ec2ad7f77e048f": "5b47ff2526741ae22793c2759558f53e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/86/bc76c19735a971906c5cded604cfbac2d41921": "2d9b97205a33cfd5501bc3e0fa955df2",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/01/df3ff8887da4f5865ac807b5daa1e2540a1431": "4ba4a83a683e0d9e6b2a6be8246789ac",
".git/objects/64/3af7220c3858380a0c8ae0b1ab7b7f857922e6": "e91a0b74a0b60beff276dfdbdbc8112e",
".git/objects/e2/8d2367357b5a1e90d7730e4b81935ac47f0e42": "4768c5bc95f8da3e1144765d37fca8cd",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/f6/4fa21f29da5631cb1ce7ced40cf1cb8ed287da": "f8abe363dddf88a89e69d1b06528014f",
".git/objects/e8/65cbfe00378f1c7bccc341a1de3128d01f0cd5": "a537121cdfbd42b52aa9230b7976af62",
".git/objects/c3/17f1aeb0d4db4b0314e84ef2c93a8f8ec257d8": "750ffb9ead519b3a654e2fb711907087",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/89/d42ad5794cd31920fa42fc59bb6dd4a4e73cb4": "86a9164cf4d18424bd57f6c28c100622",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f1/b94d64562cf598306f00239d3a3c6b9a403525": "a2f185cece700197449c116933269d3c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/44/275323e8294333524c96ca3a19b62b77c4783f": "69f5ea815e101782074d89b97e9d2ea0",
".git/objects/ae/1e8a021d7b54031264561451862c565fc595ef": "b9db143218a3966fa78a979c7f19e346",
".git/objects/3c/3806ee07bdbbad38da63561d005d8fa755c63b": "6a913768b8d89cb9bab803ad5be8fb33",
".git/objects/94/8ba684f2dada78fdc868885ddc0b404ed40930": "bb9c019378de9064399f08f9586c2122",
".git/objects/bf/a6a78d99c378ec0225d38653d1e10c13332b23": "a1b4079256de5960bceacf21bbb14b6d",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/0c7db1cf76a7d0dcbc5621fc18a6eee3b48a24": "6a1dc33416a2a71a5407e032155d4ed6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/08/1fd5a7c51c2bf376688c4644d35facb5257855": "902f779f89e1f98623038d5c78d06f3d",
".git/objects/08/4f2e0ebda3b0eab166ff5d6620d690dc41de60": "32f9da245d480d2b135c3c386ab9208d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a8/f8dd65bb5d0ddebc95d787ddec9b718068ef66": "2580a8473898ccd42a0ada0cc80b3b42",
".git/refs/remotes/origin/main": "bd6fa5203d96cea530b384d27d804d10",
".git/refs/heads/main": "6b279c2fe1dc641d892865eaa5d2ba7c",
"index.html": "c6a5719c033ff8529685bbd8c9d096be",
"/": "c6a5719c033ff8529685bbd8c9d096be",
"assets/AssetManifest.json": "90bc41812c3b71ec6736731468fd83a4",
"assets/NOTICES": "f4a0dd5e4516c373d89a4770705228ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/lib/ImageAssets/Nike%2520Air%2520Jordan.png": "78e8bca4541629b61c3fe1211177d29b",
"assets/lib/ImageAssets/Nike%2520Air%2520Force.png": "995eb077efa1db9599cad5806e9500aa",
"assets/lib/ImageAssets/Nike%2520flywire.png": "75a4a78bc6795ab4c5106ed7e15d96ce",
"assets/lib/ImageAssets/Nike%2520SB%2520Zoom%2520Dunk.png": "06fbd7f5dcd7e66fb0d252cc5587356b",
"assets/lib/ImageAssets/nike%2520logo.png": "076b6d8ab2dac32c10f6b45e6e3a19e9",
"assets/lib/ImageAssets/Nike%2520Zoom%2520Freak%25201.png": "0d0a8eb6edc3fd8120d8b584f88e0d80",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"main.dart.js": "d12f52cb89c47ca487b016dec2b8409e",
"manifest.json": "7217795f972be02adb18c54d44eed736",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
