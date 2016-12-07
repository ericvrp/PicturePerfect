const albums = require('../src/all-albums').albums
const request = require('request')
const sharp = require('sharp')
const md5 = require('md5')

const maxImages = 1000000
let nImages = 0
let nBadImages = 0
let nGoodImages = 0

for (const album of albums) {
  for (const picture of album.pictures) {
    const {link} = picture.image
    console.log(md5(link), link)

    request({
      url: link,
      encoding: null
    }, function(err, res, bodyBuffer) {
      if (err) {
        nBadImages++
        console.error(err)
      } else {
        nGoodImages++

        sharp(bodyBuffer)
          .toFile('public/images/org/' + md5(link) + '.jpg')

        for (const output of [[128, 40], [256, 50], [512, 60], [1024, 70]]) {
          const [maxSize, quality] = output
          sharp(bodyBuffer)
            .resize(maxSize, maxSize)
            .max()
            // .progressive()
            .quality(quality) // (jpg) default=80
            .toFile('public/images/' + maxSize + '/' + md5(link) + '.jpg')
        }
      }

      console.log(nGoodImages + ' good and ' + nBadImages + ' bad images')
    })

    if (++nImages >= maxImages) break
  }
  if (nImages >= maxImages) break
}