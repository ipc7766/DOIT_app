'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "12a543d3782992b674805587ceed623a",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "3aa90f801597a9606896945a81bc62df",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f893cb5a6026331d6d16a3c0e23afd5c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cb5644b5da5168b474f0ef0ba94dbece",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ba71ced89b9607d779f981132bc59e5",
".git/logs/refs/heads/main": "9e8e8ae7804a44acf4475ee0d24e9f79",
".git/logs/refs/remotes/origin/main": "a6e039cabb3fc24f58e0fed1c1825439",
".git/objects/00/34da40571b181b72c3bd87ed6abacd8938e828": "64f8d8726d844b3c9cd2c3e4292ba885",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0d/924de3cf74655d53ccfb6098db53d73c8bf6df": "6d7680979cd36b80d609305226d9f5b7",
".git/objects/0f/5784978742e134e5c5b434e23488d99c62527f": "96e1cbfe863261f912f0b7a4dc74663c",
".git/objects/14/28e40194e89980ff43cbc2c5ef1ca4a07cadd7": "0f7acbd0ce9a4aed0beee901425f673d",
".git/objects/15/687de79640916ed1ef48d0a0ad0ef6b8a7b53f": "652087874bd87d4dc7ddc59d4b03120d",
".git/objects/17/1a85a622a451367688e1fd7f4cca148b717f50": "7017d786036977e20d8fa8a52989af58",
".git/objects/17/5b365fe43683ffac90353e5247713627c77b0e": "787d19b8d395415b9be965084474fbc5",
".git/objects/19/632215bb7d162d7b61cbf4f67e28a64785cb2e": "b03c723781078345fc5da52d1fd5c5f8",
".git/objects/1c/302113d012d846174d265dc7f92992ac2123b7": "f0b23db21de52785e9b5db30601857de",
".git/objects/1f/d4e0674ab1ba8ec45898500fb957fc181b2b40": "3f3f5b212146fbbe0de6d7022536f8bb",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/f4a2b0101c20add6b87c002292801471bce70b": "7c98d421e47ed6e89f11d2ad1d7d0e6f",
".git/objects/26/b670e227fd3e55529048dbdd7187f41a9c09d6": "52d576eb592da2d3bbf0c5304ca3a71c",
".git/objects/29/3abf7ac9aacbeab5e81775529e242156117e01": "3f1315d6851705c154497b081e0ccbaf",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/37/0e513d0af5226c3d46c3cfb47503feb296ff6d": "1ee416011976aa3c7262bc473caeb32a",
".git/objects/41/d72b582dff560f53b13fae9876f6b16eccce25": "505d81a773e9b4ff86ecdc35c47696bb",
".git/objects/42/ba19ff5353da562fcd1488056f9a4c2bb0997d": "3d29a9c224c8caa785834002942b8cc1",
".git/objects/46/01ae3e3997a5bc450b5f994fc27adbd15d7dac": "7b4f56a205c8de099b2fc125a27075d4",
".git/objects/48/9e75e784ec2d5b668ce1a446d8222d9bc22452": "2d04a29a10b294304f69d5acb977d568",
".git/objects/49/020f1caf4fc7542383f3bb01acc574965b41ab": "ec4182871b53b806ac1dc6d807fcfb63",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/53/a448c45b843d0002e03221f487444509c95ef8": "003ade6cc8b6e2eec31e10902c0f6aed",
".git/objects/57/9003bdf23b0d222f1c8b59e383365bdd7228c1": "66805629bd0d23f5c3c7f129b3a33280",
".git/objects/61/e6454163831672af8251e1a031be9cd08fec6a": "431a857495b52929bff557564439d28a",
".git/objects/66/b3974c1836a49eea079b242b10ccf4b07e10c8": "4357caa6787f70f6865b9a74127e34fb",
".git/objects/68/58804f9f73ea1cc88dfddcfb743117350e9412": "1e440e838cf68ef190c8d4861fd67d82",
".git/objects/6a/e2ed925111b3ed2c292f20cd618b7f2d951aac": "a90ab185df080848c27a995a919391d9",
".git/objects/6f/1cc63d7721eaf4abb8d7d8c6259ce20499826c": "451d9aa01c9bd8cf95adb06586a9ed3f",
".git/objects/77/75a1b3b5760e203d887c474be69b5dd678be2d": "744afe2e53f0765b37127112f64582c5",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/88/2c9c19cc52dd6323c16dd11d755a47ad5a239b": "12dd147b7dc55c3c751d4510ea9c470c",
".git/objects/93/59c37108d5a5915045d0acba344352bd8aa2a3": "cb068214b2eb036051165af1906a2e52",
".git/objects/96/63c520bf3b9a88966985f32dc6030e6dcfb13a": "999d2a4b46007e782aceb54df712e5e9",
".git/objects/96/78105450dae6d4154a4599f5fffb56b27fb5d4": "fc61727cdd837a9430cb2abef5976b24",
".git/objects/96/9e935bfb1149d4c8ca6b5d170f538d23dd4bdf": "52983d81c156cc2d42698809586ec863",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a7/3ec88f702ff44a8260a3fbe2eb2ac91909028e": "09507096437292e902c6746be8b5fb13",
".git/objects/a7/a0bcc84bd52b3f331e01bb251df4ac3a11cdae": "6c5c51100ca20e787467026e56164452",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/bb/968c9dd8d561f806d9a29794be7bdaf2db7ff0": "9a9ab2bcce46f4bd9168721ebd9851d1",
".git/objects/bf/5c11b1e0db8279ddcaa94826f243436b717ff1": "ebc666a0c4e3fb4b261a3379f5fcc419",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/ee3cbff2b5cc29d0e94d7b662be743320a6c8a": "2090bf2e2499968aadef753bf447245e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/111cad21bfee7838aa48f34d39d163e93be9c6": "16a230d9de5262d9d5efed794f503c64",
".git/objects/df/3510e3887d21168d95b85d9c2df4b1b2c26be9": "1de061a235f0cf53be21d246439264c7",
".git/objects/e1/0e0f62bc9924a54ba62b837c451f0405c181c2": "abfd085851a4534c8d64a274aa514c59",
".git/objects/e2/2f6389e6aa9f84da9db93bf215251e5506e96e": "55cd90bce69af672cc4d328116c66b74",
".git/objects/e2/a1c7a4a3864c5332e3b25105664679f9b2e231": "5b4d89d23db2bae9ca303a21d277df02",
".git/objects/e2/c36d14cf7333b4aa002706ff55be5c8af451ba": "c9c388a7e92c39a0b089ea35d781a600",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/da7886eba23a364f7c5544b8e82414c3efd465": "f9d3a11cf681c87b990a1f2b593e9e20",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/b6d28ef23122d0daa929088a219e0a206eba8d": "2acfc6af1f95295ddab372b90cc645f7",
".git/objects/ef/56193b0a8da1b811051bcbf77e2023e751fd1a": "1095f0b87100451dd1308c73dfe2a25e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/8b487de758305a927f0ca26d4038190e84d5cf": "8d398ad73ccd5b1c4d0dbd67d2db5bc1",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "6b8b5efe40fc543f828ef4d4371a9c7f",
".git/refs/heads/main": "af3d1bed877c371a258e2f04ec939706",
".git/refs/remotes/origin/main": "af3d1bed877c371a258e2f04ec939706",
"assets/AssetManifest.bin": "acb158bdc7df52148be74268544fabe4",
"assets/AssetManifest.bin.json": "f1b82d10a283bc7ec2daf5d239045826",
"assets/AssetManifest.json": "470daaa6eae62221d8b00b26355a9b85",
"assets/assets/fonts/DarumadropOne-Regular.ttf": "5462f073046261a76bee79be99f4bab7",
"assets/assets/images/calendar.png": "94765db4e6449c4d3d1ec7d861f414b0",
"assets/assets/images/google.png": "0dee9afcc941a669d80ae562ab11be55",
"assets/assets/images/home.png": "4c049ddf25c1f66cd0885a8a5af4dad6",
"assets/assets/images/icon.png": "d7c4aadf14b2756cd08de3f868130147",
"assets/assets/images/list.png": "4d6f09f57a8fabb229e850659e4537b0",
"assets/assets/images/pin.png": "09d05831f6a5e7e0ea45b01b5de453a4",
"assets/assets/images/project.png": "8d156c6a1dd9595890c13ea5b8b29656",
"assets/assets/images/settings.png": "2a609a2773b88d1e1c336960590fc08b",
"assets/assets/images/start1.png": "48f01d687f19c1825924e1079490d72d",
"assets/assets/images/start2.png": "236932bba69bf87feb018a6767dc29cd",
"assets/assets/images/start3.png": "1fe8837e12013d36bd23bad2a4d21e83",
"assets/assets/images/start4.png": "5e8966452e724a85a82a16e52962c035",
"assets/assets/images/term.png": "16866023d005c4470df29ecf881496b0",
"assets/FontManifest.json": "773e13871dfe32ff2ef81ed6ea56d6b3",
"assets/fonts/MaterialIcons-Regular.otf": "7eb0ec74fe766ca9f3d1e480232ddb30",
"assets/NOTICES": "25a26e579adb75e8ad5e93f18881332d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "894d4c6026917f8b912901fc2c59343b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "10927f351040fd5e427c2854f9af020e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "019d36e5c0b8ae0e7823690c1006b7f6",
"icons/Icon-192.png": "00bd705a49d4d4f72e62bec75e77467c",
"icons/Icon-512.png": "c79cc94b9ad706662d3035b10c9f1f69",
"icons/Icon-maskable-192.png": "00bd705a49d4d4f72e62bec75e77467c",
"icons/Icon-maskable-512.png": "c79cc94b9ad706662d3035b10c9f1f69",
"index.html": "c4dba1e1de060b9f18c0299e06f435e0",
"/": "c4dba1e1de060b9f18c0299e06f435e0",
"main.dart.js": "9eae86f7d4c8cb96700c4c566555e119",
"manifest.json": "f9f003d879079899f952c84be318ef6b",
"README.md": "5e85ff0de59e590b0c82012bad2e3442",
"version.json": "3f7c89d5d4fe876440143af813ccc8f2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
