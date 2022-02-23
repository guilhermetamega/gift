if (!self.define) {
  let e,
    s = {}
  const n = (n, a) => (
    (n = new URL(n + '.js', a).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = n), (e.onload = s), document.head.appendChild(e)
        } else (e = n), importScripts(n), s()
      }).then(() => {
        let e = s[n]
        if (!e) throw new Error(`Module ${n} didn’t register its module`)
        return e
      })
  )
  self.define = (a, i) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[t]) return
    let c = {}
    const r = (e) => n(e, t),
      o = { module: { uri: t }, exports: c, require: r }
    s[t] = Promise.all(a.map((e) => o[e] || r(e))).then((e) => (i(...e), c))
  }
}
define(['./workbox-1846d813'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/09ryve2xxq60UwFJa5Nx9/_buildManifest.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/09ryve2xxq60UwFJa5Nx9/_middlewareManifest.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/09ryve2xxq60UwFJa5Nx9/_ssgManifest.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/chunks/0b7b90cd.26a3995d0dc7cc17.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/chunks/651.cd440d205ca10b23.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/chunks/703.74445b5fd68c08c6.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/chunks/framework-8957c350a55da097.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/chunks/main-76f598cfe439f872.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/chunks/pages/%5Bslug%5D-ec96ac33c4ee6e7f.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/chunks/pages/_app-074b1470ee2b152c.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/chunks/pages/_error-ddb7477254ab31d2.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/chunks/pages/index-6b41b2c0d1792163.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/chunks/pages/place/%5Bslug%5D-92e8c163ed3a79d3.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/_next/static/chunks/webpack-4714e131c6b3f39f.js',
          revision: '09ryve2xxq60UwFJa5Nx9'
        },
        {
          url: '/img/TLauncher-2.839-Installer-0.9.3.2.exe',
          revision: '4df6ec1fbd3afa38cc949ff1f923075c'
        },
        {
          url: '/img/boleto_Mangaratiba.pdf',
          revision: '78af509d9569b48b48dceb87cac6928e'
        },
        {
          url: '/img/boleto_mangaratiba_pai.pdf',
          revision: 'fa76a2f5542d2c64e32b01836d295bcc'
        },
        { url: '/img/cover.png', revision: 'bab1fb015a51d458c6e3b17dbb010ccb' },
        {
          url: '/img/hero-illustration.svg',
          revision: '5fd5143cba1046a214d9a359fce22e89'
        },
        {
          url: '/img/icon-192.png',
          revision: 'd27169d080684ebb57b8387d05c4b444'
        },
        {
          url: '/img/icone-512.png',
          revision: 'f1d74b43a3832183202483a40d9e9d84'
        },
        { url: '/img/logo.svg', revision: '202525302ad30aca5b2b790d4b0b5796' },
        { url: '/manifest.json', revision: 'f38c64552f85e82156515e630e358cfc' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      'GET'
    )
})
