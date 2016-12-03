// see: https://github.com/jeffposnick/create-react-pwa#adding-in-a-service-worker

module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/*.png',
    'build/*.jpg',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  navigateFallback: 'index.html',

  // https://googlechrome.github.io/sw-toolbox/docs/master/tutorial-api.html
  runtimeCaching: [
    {
      urlPattern: /\.gstatic\.com/,
      handler: 'cacheFirst',
      options: {
        debug: true,
        cache: {
          name: 'lowres-cache'
        }
      }
    },
    {
      urlPattern: /^http:/,
      handler: 'cacheFirst',
      options: {
        debug: true,
        cache: {
          name: 'hires-http-cache'
        }
      }
    },
    {
      urlPattern: /^https:/,
      handler: 'cacheFirst',
      options: {
        debug: true,
        cache: {
          name: 'hires-https-cache'
        }
      }
    },
  // {
  //   urlPattern: /^https:\/\/example\.com\/api/,
  //   handler: 'networkFirst'
  // },
  // {
  //   urlPattern: /\/articles\//,
  //   handler: 'fastest',
  //   options: {
  //     cache: {
  //       maxEntries: 10,
  //       name: 'articles-cache'
  //     }
  //   }
  // }
  ],

  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js'
};