/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2c4235d205c5c03aeb33a663b1a27ff2"
  },
  {
    "url": "api/cli.html",
    "revision": "60f1fb6a5e19a1e1f9671dff205ba925"
  },
  {
    "url": "api/node.html",
    "revision": "eccd88f2000d91a39db269465b0e5247"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/1.9-lang.png",
    "revision": "9a95306985d4954fe54bc8de5512d3ba"
  },
  {
    "url": "assets/1.9-official-plugin-options.png",
    "revision": "55243b507656a5c36b45b7d4b27c1cab"
  },
  {
    "url": "assets/1.9-official-plugin-tuple-usage.png",
    "revision": "252870643841d8bac56aac10d1a9d91f"
  },
  {
    "url": "assets/1.9-overview.png",
    "revision": "f3534cdf12b0474265fd296bdc82c225"
  },
  {
    "url": "assets/css/0.styles.d5e1db7f.css",
    "revision": "c9b1dff35044d8e2d246fc5f3f0316d0"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.57d5ec5e.js",
    "revision": "a4f2b97bb73c1fe14fa709de7c758b93"
  },
  {
    "url": "assets/js/100.1582a402.js",
    "revision": "3379761b60ce3a88bdf9d8fab9d50b71"
  },
  {
    "url": "assets/js/101.1c999ac5.js",
    "revision": "b18aa5bfc364b6bac787870ddc224c08"
  },
  {
    "url": "assets/js/102.00979c1b.js",
    "revision": "d154adbd9c146df5c4a736549401b002"
  },
  {
    "url": "assets/js/103.69dc6813.js",
    "revision": "016b1871e6b9f80dba37987695214485"
  },
  {
    "url": "assets/js/104.208cc40b.js",
    "revision": "5a3152cdb38b496c44debe1ca8fc60a2"
  },
  {
    "url": "assets/js/105.5f22ff7e.js",
    "revision": "27389ec598136928ec354a6a5283094d"
  },
  {
    "url": "assets/js/106.caffe888.js",
    "revision": "b277883d057429c7180c02061d23f5d0"
  },
  {
    "url": "assets/js/107.64a5d106.js",
    "revision": "85a0f1a6790f48a7973e164145b4028c"
  },
  {
    "url": "assets/js/108.6d91d59d.js",
    "revision": "053f19526b7e780cfcdf997501e885ee"
  },
  {
    "url": "assets/js/109.11fc9675.js",
    "revision": "ee745467e4a8b7e839b970515f7935bb"
  },
  {
    "url": "assets/js/11.d406b511.js",
    "revision": "63ca61e45a6a114491443f944dff2679"
  },
  {
    "url": "assets/js/110.cac27508.js",
    "revision": "98b9a051811d5fc58fb51ae0e8d8a408"
  },
  {
    "url": "assets/js/12.2cb4bc00.js",
    "revision": "6aa64d7f4ae9e8a22286a9233f316f60"
  },
  {
    "url": "assets/js/13.1bdc7e18.js",
    "revision": "9f5e766d6011bbdefb744303393cfc5f"
  },
  {
    "url": "assets/js/14.ed3f3eb9.js",
    "revision": "e2e7ba7bba62903a860993b8bd16a747"
  },
  {
    "url": "assets/js/15.c9abe5e0.js",
    "revision": "c945ee5c7f137bec909c3f0c38a920ac"
  },
  {
    "url": "assets/js/16.65fcf53a.js",
    "revision": "d27db9c86294c9fb22ddcca7dcc5b0cf"
  },
  {
    "url": "assets/js/17.7f9ff09a.js",
    "revision": "ec56c8f6f91ecaa0f418f328460c04eb"
  },
  {
    "url": "assets/js/18.12801bc1.js",
    "revision": "b68ee6c95a8613e023dfd53dc18af210"
  },
  {
    "url": "assets/js/19.dfba2c1e.js",
    "revision": "cfb8ee2842b3a984f6bf935b435e3157"
  },
  {
    "url": "assets/js/20.c8b58753.js",
    "revision": "77624df41fd55cf38dee5526162ece46"
  },
  {
    "url": "assets/js/21.099bd038.js",
    "revision": "9ab4edf0f912c9cd0de1a79654155b68"
  },
  {
    "url": "assets/js/22.ce864247.js",
    "revision": "d717bde2d39eebcbb9e3d442cc29e704"
  },
  {
    "url": "assets/js/23.3037c01f.js",
    "revision": "bd3252a4ea0eb0fcda4db9509bcedcfc"
  },
  {
    "url": "assets/js/24.c876b8f1.js",
    "revision": "f1a3ae605669b9d43ebbe6c2703bb783"
  },
  {
    "url": "assets/js/25.719b7987.js",
    "revision": "97bf0c0e1a485f9b74b9e9a90ca3d0d0"
  },
  {
    "url": "assets/js/26.57df62d6.js",
    "revision": "1c24f01304b3eef50e2403a2e7023a7e"
  },
  {
    "url": "assets/js/27.7cf0eae5.js",
    "revision": "79d892778859fc833f73063202a7c350"
  },
  {
    "url": "assets/js/28.201e77b2.js",
    "revision": "b058f53b856f016636feef2119c5f6d8"
  },
  {
    "url": "assets/js/29.8c99db9f.js",
    "revision": "d9bf591e3dd3fe24e31bda1aa6cb95e1"
  },
  {
    "url": "assets/js/30.dc398195.js",
    "revision": "63044bd1459540f971169092b09f60ab"
  },
  {
    "url": "assets/js/31.f15eb6c7.js",
    "revision": "10fd55cbfe822367adf2a67eaf9b6571"
  },
  {
    "url": "assets/js/32.c8b337f9.js",
    "revision": "c47950b229b023a3c36a52b946341ab1"
  },
  {
    "url": "assets/js/33.6194f3db.js",
    "revision": "54be4b9123ce1342aad1e1cd4183853b"
  },
  {
    "url": "assets/js/34.4c07e85f.js",
    "revision": "604067e306e38aaa177e1ae0cfe4cf52"
  },
  {
    "url": "assets/js/35.739afd3d.js",
    "revision": "607a7af8c3ab9c62c3c069b88e30d7df"
  },
  {
    "url": "assets/js/36.121d2382.js",
    "revision": "a6ed7e9727e45fa41b360fa3364f4e86"
  },
  {
    "url": "assets/js/37.aa4d5c41.js",
    "revision": "dad2561025a922793911ca10f2d552a9"
  },
  {
    "url": "assets/js/38.367f8f0b.js",
    "revision": "c139b66d021a8ce2a3076ed8e7c4b1c1"
  },
  {
    "url": "assets/js/39.b7fbba9c.js",
    "revision": "0c559f1689b66de4bb61c334d76be6b1"
  },
  {
    "url": "assets/js/40.8dec8c92.js",
    "revision": "b8d62912387f7c732263c4799807c5dd"
  },
  {
    "url": "assets/js/41.7c3e1a59.js",
    "revision": "d62847e4070248f8c8b20a2453693d3d"
  },
  {
    "url": "assets/js/42.6cc71fed.js",
    "revision": "2556fa2b91535fbc2873694884186325"
  },
  {
    "url": "assets/js/43.a6b0baf3.js",
    "revision": "dce6b516833ac8aa588d67544bd86228"
  },
  {
    "url": "assets/js/44.a58c530c.js",
    "revision": "8617c79780b9e91d57e2379af75357d8"
  },
  {
    "url": "assets/js/45.db6d8463.js",
    "revision": "f6eba28b94f1fbe7d248624cfdb23adf"
  },
  {
    "url": "assets/js/46.c3c793e2.js",
    "revision": "a63a8f4ed0362b65db4fe782b7a97d4e"
  },
  {
    "url": "assets/js/47.9d5f0c9e.js",
    "revision": "fa24f879a17af7a3ceb5fb9420ca36eb"
  },
  {
    "url": "assets/js/48.34ce2673.js",
    "revision": "1bf5db3fa4a32a6795eee10864ecfb6b"
  },
  {
    "url": "assets/js/49.12f940a3.js",
    "revision": "67f66642009cd3d4aa7dd146b2f11016"
  },
  {
    "url": "assets/js/5.6219ac07.js",
    "revision": "7f68985ab06f11f8722afa8773623a5e"
  },
  {
    "url": "assets/js/50.3c079254.js",
    "revision": "b40c21e7a01e3d72c2f64d2bcd0b77f3"
  },
  {
    "url": "assets/js/51.237611a7.js",
    "revision": "4fc3dc33e589c27652f69ca8d83eeb41"
  },
  {
    "url": "assets/js/52.594429df.js",
    "revision": "a2d5f25cc9ee5c0a01da9e574a3f3daa"
  },
  {
    "url": "assets/js/53.d759e686.js",
    "revision": "5df2fd50c1be1fc7aa6f332d825ad9e4"
  },
  {
    "url": "assets/js/54.ac2e6686.js",
    "revision": "8c75305c718391d0f04dbbf5ef8bc923"
  },
  {
    "url": "assets/js/55.6d991df7.js",
    "revision": "a2f54a0ebc63016aebf6734a11235a37"
  },
  {
    "url": "assets/js/56.eb0f7518.js",
    "revision": "0858f330388b3c39a9645aaf838a7824"
  },
  {
    "url": "assets/js/57.e5027490.js",
    "revision": "d600d26197deb5d95142ca67aaa02c82"
  },
  {
    "url": "assets/js/58.e670d3e0.js",
    "revision": "ebf96385bd4cf9ab7944cf12fa46130e"
  },
  {
    "url": "assets/js/59.7afd0da1.js",
    "revision": "ebc314d66891aaccabeb29c90482279a"
  },
  {
    "url": "assets/js/6.3218ba87.js",
    "revision": "a3d263a1b0568e302f34d38fe6953e05"
  },
  {
    "url": "assets/js/60.46821498.js",
    "revision": "32d7358cd2210400827f996232b724b8"
  },
  {
    "url": "assets/js/61.4a36dc2a.js",
    "revision": "32afbe39c88151e99f503951ac95d5d0"
  },
  {
    "url": "assets/js/62.afa5b679.js",
    "revision": "e7959068247a88a72bde1c89ed9ae69b"
  },
  {
    "url": "assets/js/63.a0324286.js",
    "revision": "08ebb32224e3d8c2ffd82eb55cbec2a1"
  },
  {
    "url": "assets/js/64.e6c31ed0.js",
    "revision": "50c9c72a3d3c1ce9a7096abf60f8c995"
  },
  {
    "url": "assets/js/65.dc0c6dad.js",
    "revision": "30d2a0df2990ef5d5dc6644e89a09548"
  },
  {
    "url": "assets/js/66.70ab83e2.js",
    "revision": "b810d442e676a998d3f090d5e3a4db45"
  },
  {
    "url": "assets/js/67.8fa73551.js",
    "revision": "275e405a6d516ec6914e4d134280e7d4"
  },
  {
    "url": "assets/js/68.01db5821.js",
    "revision": "2b5b397428e587303e24cb6908f538f4"
  },
  {
    "url": "assets/js/69.dcf8fa54.js",
    "revision": "f6f890ce5d87207c2b7128f312491b6e"
  },
  {
    "url": "assets/js/7.933b3593.js",
    "revision": "ef4d69da4af5183f38ae8ad40f07de8f"
  },
  {
    "url": "assets/js/70.81311c68.js",
    "revision": "756e409b33d97ac0c4ff49fd623b94f7"
  },
  {
    "url": "assets/js/71.1e03fcfc.js",
    "revision": "06a27b5c7c97a03413e7074d8456b19c"
  },
  {
    "url": "assets/js/72.3450f14c.js",
    "revision": "03d8048355c9d432d064fdfa5f358558"
  },
  {
    "url": "assets/js/73.d7261850.js",
    "revision": "91d5420f095facc977763b46d0c50a57"
  },
  {
    "url": "assets/js/74.2e08471d.js",
    "revision": "fae3df11c010a492cd5009e16b9bfa55"
  },
  {
    "url": "assets/js/75.62e2e9ed.js",
    "revision": "2df1b05df059bed0e6298774d2c6d74c"
  },
  {
    "url": "assets/js/76.76c6909a.js",
    "revision": "a3589eeb6f0f31d49c9517d6061a51ca"
  },
  {
    "url": "assets/js/77.24391826.js",
    "revision": "e4d52f76c250022013c13fd63c9485b9"
  },
  {
    "url": "assets/js/78.13d0b35b.js",
    "revision": "5812bfb48b08666036cf84bbbcbc94e2"
  },
  {
    "url": "assets/js/79.2b295018.js",
    "revision": "6675f1da18d35a9360ab015b2334f6b7"
  },
  {
    "url": "assets/js/8.7f1d50f3.js",
    "revision": "4882be89ad3df1ce9dd73313a2072d55"
  },
  {
    "url": "assets/js/80.bd6ad5f1.js",
    "revision": "7fd799085f8ecb0a34811eb5b466d84c"
  },
  {
    "url": "assets/js/81.ee7b67ff.js",
    "revision": "e676b24662c4445746cb6215977c7dc3"
  },
  {
    "url": "assets/js/82.4b2c3561.js",
    "revision": "acee83981d45ef2837755ac2f2f32716"
  },
  {
    "url": "assets/js/83.b019280e.js",
    "revision": "fb88c31c68dd95402f7bd980f5239330"
  },
  {
    "url": "assets/js/84.87639ade.js",
    "revision": "74fc77073d4ae21f77fbf193735789e1"
  },
  {
    "url": "assets/js/85.533357b7.js",
    "revision": "7318cd0116a2f993aea3349e7edfa87b"
  },
  {
    "url": "assets/js/86.59149503.js",
    "revision": "4eea26d913b78495cac69b5c881dfb10"
  },
  {
    "url": "assets/js/87.d8b42e67.js",
    "revision": "ea28288ea3bf561c2ec827d2f33c7b6a"
  },
  {
    "url": "assets/js/88.1d3097b1.js",
    "revision": "703787af91aeb049b13d6040a61f50c1"
  },
  {
    "url": "assets/js/89.61b5e279.js",
    "revision": "1f93946040f3488807020d57209f9da4"
  },
  {
    "url": "assets/js/9.fadabe8d.js",
    "revision": "4f2252a13e8b6da09b9aa8747be2fc49"
  },
  {
    "url": "assets/js/90.776533a5.js",
    "revision": "3da6e52197ade1259aede4483d8dc106"
  },
  {
    "url": "assets/js/91.02d007dd.js",
    "revision": "bddec9e6692e0a241fdd07ae936539e2"
  },
  {
    "url": "assets/js/92.5c93c170.js",
    "revision": "49a792028e9dce8c4efd4f201f285c50"
  },
  {
    "url": "assets/js/93.2c399905.js",
    "revision": "272019c4c1c29147868d746f7e674464"
  },
  {
    "url": "assets/js/94.71ac675c.js",
    "revision": "3f9c7b2f9907be7d25c9ebaa729e33b6"
  },
  {
    "url": "assets/js/95.c423e391.js",
    "revision": "cdee1fa99ab5062eb093180754aa7549"
  },
  {
    "url": "assets/js/96.9f1f52a2.js",
    "revision": "d273589cc9b89cc6de6108a4640d7622"
  },
  {
    "url": "assets/js/97.3f0066f8.js",
    "revision": "b16a68eac459e82a4f7d837f4c72ab04"
  },
  {
    "url": "assets/js/98.fe89ef4d.js",
    "revision": "459f63fcc7f481ccc0d8d6724dd172dc"
  },
  {
    "url": "assets/js/99.8fdf7456.js",
    "revision": "ee21213e620057f8242beb62b9d05838"
  },
  {
    "url": "assets/js/app.8bead053.js",
    "revision": "e8d85c84005c410b467e9a51458cebce"
  },
  {
    "url": "assets/js/vendors~docsearch.e0c00185.js",
    "revision": "7032f0387eda3c3cd075a2be354f4e8f"
  },
  {
    "url": "assets/js/vendors~flowchart.4d811a74.js",
    "revision": "5c4afe1847726abffdba010302bc0d6d"
  },
  {
    "url": "assets/js/vendors~notification.29f11cd4.js",
    "revision": "ed2eb05acd21b5ef4ef08408c5ea3733"
  },
  {
    "url": "config/index.html",
    "revision": "176f253b5e83765ca753b118d28aa187"
  },
  {
    "url": "faq/index.html",
    "revision": "18019bce40950daf3308319f778c81f4"
  },
  {
    "url": "guide/assets.html",
    "revision": "6b1c2567ed30573267b8503d365b8bda"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "00ba69c18025b77754d26537a2788dfc"
  },
  {
    "url": "guide/deploy.html",
    "revision": "f03ebe3e25dea72925458560f0f5d53d"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "b29b26a0cd24a9dd51f9b728e9b606bc"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "a2ba165e85a9ddca9ac923cbe7b0aa2d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "73dc44cdc835e7b2a22519337380fbd2"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "06ac855140674380f0c71adf29053ddb"
  },
  {
    "url": "guide/i18n.html",
    "revision": "96aa8178301612a2ee7f5146ba3fcb7d"
  },
  {
    "url": "guide/index.html",
    "revision": "769829f803cb94cc4fcadbe7436d3210"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "70a3751838569dc0e0ec622485b05a9a"
  },
  {
    "url": "guide/markdown.html",
    "revision": "d90c5c33e17a5a15e90ef7fbd2f95237"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "9b99cc82529c0f3f564e272907e051a7"
  },
  {
    "url": "guide/typescript-as-config.html",
    "revision": "0b217d1d952efed5ba4e107811a1931d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "03b500b06db5b0f36a06f53eff59fd94"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "e2095f4fef60301bce6bec28c39b0d45"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "9651b61bc1f52106a15bdeae312e2d12"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "ae1b903c6d28cc2c86fb3f41728bfc74"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "8995b613918a52025a01eddb97ff6f5d"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "efc7a6eedd2deb306d0ef8acb94a688e"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "3947f63ffa80b399f1c8b6e0d1214167"
  },
  {
    "url": "plugin/index.html",
    "revision": "6d4107e0f55eefa3e66bcd364ba3a18d"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "a4d82c69a281d752ee3f9aeb2d50ce27"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "7c31aeca15a0a0a96cc865e2d63cb668"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "534cb4d281b43b470ab0600acaf44e47"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "10cc1b95d8352216c56212bb439b622f"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "f1f887607f64850e3602cf3bd8550356"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "ecd3ab871e7b69dbea8a4c467d57f950"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "0c22e5f9494c4a63c68e37071cfae8bf"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "30a6c1068269b82400789579ad5350ad"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "c6f357261ad9b0a9424eda3ebd335454"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "ecd1c21ef9884772b389434427cb1960"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "a23b315b56653c80a939fdeaa92b3f78"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "4ea034defa235d5ae143ab18d542ffc3"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "03c43ba881752af934334b03639bdca7"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "c84eb3a6e00c61691aa68fb5d3f0b668"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "ff7bbb0917ce4b0d671300e7841fa5d4"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "aed64c18df1b793a884fd473886b51c1"
  },
  {
    "url": "theme/index.html",
    "revision": "81f92011f9deb3f59060b0d66a3bea92"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "f93647e9833b8bc01036432e550737e2"
  },
  {
    "url": "theme/option-api.html",
    "revision": "31eb4737b9a01240511169533c2562e2"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "8d31ef4c356c7d55976e9bfa42ba61e4"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "cbd7724918e4f05de45eb429c9d8eb12"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "81875f41a75b211be9edefe8aeb2477a"
  },
  {
    "url": "zh/api/node.html",
    "revision": "8b4825f64ec95a2cfc9a893c4c378849"
  },
  {
    "url": "zh/config/index.html",
    "revision": "ed07621d79a9423ae9c956ff46416728"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "bffa481a1c5c2fc2b97a78c8288d31ac"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "262826233632b22f6ae87bbf3d451ddc"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "9fc1785ff2e5d3e2a7c131ae82620b2b"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "a4d387db94860a3f3eef93f5ed8692da"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "2fb669b56423526f9ae10bcd29a0ba21"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "62014a7db177f029f4b15fe17b0e8845"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "8865b5ae4d7889d1ca28c5e1deff66cc"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "4c3a94c491fbd1a0c5f594ee74fa643a"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "e65987bd06be27c554d1bb8f1cb0706c"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "b5d3c2e4cf177fe2ad7a0b8eb5b43efb"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "21a06e7ffd465d8fd29845b701260ea3"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "bebb436a2d658458d73b9a05c12d5cec"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "43464c523a1d0fabd76b241f66536c5f"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "5c83f04859283450647c39924b57be3f"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "fc2d039605a0616b43bba43d3a5b337d"
  },
  {
    "url": "zh/index.html",
    "revision": "4dbb618b92d2153ea9d9882ad3accb76"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "af61ebdb93cfbd98ce6d88ccf8439f38"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "44f83bdfc4becb0b7835186e1eb16c19"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "c61fd973a9139b256fa458862c5a73f2"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "aeaec82b4a8c689d50b1e26ba24b080c"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "e7f1ae0cd99460372e3eb2990f4871a6"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "dbace90af494100271d81fb4f751bf00"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "32162884a5e98fc7ca08d172e2d104f5"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "2e5613139a3d9249342f1581ac35f414"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "5e7e6c73cc08d0ca2cd177ffaed4ec9a"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "6161dfc1faf04eaf4388416dc7cd4f4f"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "39ca0065bc5a830558c99dc7a17ef95b"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "d9b17aadd1c8fde42fbb636b45eda80d"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "b19097cdbcd2f519017677cd7d669336"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "ee4024e6267a584231094e755355998e"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "ed554e2ee1a7982feb93e0683ad6429f"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "447a831edfbcbb56cb9a9c0908584572"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "208a0b5e96e43912bc1929d6818ab4ce"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "b065b53a65b474683d44afa4995bdd79"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "2651acc427cc828454e960676e1f8297"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "b7ecf208d5e76e45ea8851fac813659a"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "209c2b6ab8db50dbf9bf9a5be40954da"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "3e3b1f55500f3234c524ba47b857a26f"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "07a91a6d85bfe92b5f1c10d548dd7ff6"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "e6a21e513effbd58ff73ee06d58400b2"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "8e11ec252eea2c1e927df63f3c337d6a"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "f9979c8e387e3ec28f0daa952f356295"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "2031140f3ffd984040ccdaa71244a83c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
