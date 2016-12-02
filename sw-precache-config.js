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
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js'
};
