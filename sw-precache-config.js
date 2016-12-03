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
      urlPattern: /pictureperfect/,
      handler: 'networkOnly',
    }
    ,
    {
      urlPattern: /\.gstatic\.com/,
      handler: 'cacheFirst',
      options: {
        cache: {
          name: 'lowres-cache'
        }
      }
    }
    ,
    {
      urlPattern: /^https:/,
      handler: 'cacheFirst',
      options: {
        cache: {
          name: 'hires-cache'
        }
      }
    }
  ],

  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js'
};
