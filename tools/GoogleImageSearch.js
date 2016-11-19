const google = require('googleapis')
const settings = require('../settings')


const customsearch = google.customsearch('v1')

const q = process.argv.splice(2).join(' ') // remove: <node app name> <script name>
// console.log(q)

// https://developers.google.com/custom-search/json-api/v1/reference/cse/list

console.log('module.exports.' + q.replace(' ', '_') + ' = [')

const nResultsPerBatch = 10
const nBatches = 5
const maxResults = nBatches * nResultsPerBatch
let nOutputedResults = 0
for (let nResults = 0; nResults < maxResults; nResults += nResultsPerBatch) {

  const params = {
    key: settings.private.GOOGLE.API_KEY,
    cx: settings.private.GOOGLE.SEARCH_ENGINE_ID,
    safe: 'high',
    searchType: 'image',
    start: 1 + nResults, // note: 1 = first search result
    num: nResultsPerBatch,
    q: q,
  }

  customsearch.cse.list(params, function(err, response) {
    if (err) {
      console.log('Encountered error', err)
    } else {
      response.items.forEach(item => {
        nOutputedResults++ && console.log(',')
        const result = {
          image: {
            link: item.link,
            width: item.image.width,
            height: item.image.height,
          },
          thumbnail: {
            link: item.image.thumbnailLink,
            width: item.image.thumbnailWidth,
            height: item.image.thumbnailHeight,
          }
        }
        console.log(result) // note: results might arrive out of order
        nOutputedResults === maxResults && console.log(']')
      })
    }
  }) // end of customsearch...
} // next nResults
