const album01 = require('./pippi_langkous')
const album02 = require('./ernst_bobbie_en_de_rest')
const album03 = require('./bassie_en_adriaan')
const album04 = require('./sinterklaas')
const album05 = require('./zwarte_piet')
const album06 = require('./pakjesboot')
const album07 = require('./ome_willem')
const album08 = require('./swiebertje')
const album09 = require('./brum')
const album10 = require('./kabouter_plop')
const album11 = require('./samson_en_gert')
const album12 = require('./piet_piraat')
const album13 = require('./dora')
const album14 = require('./teletubbies')
const album15 = require('./zandkasteel_aan_zee')
const album16 = require('./pipo_de_clown')

const albums = [album01, album02, album03, album04, album05, album06, album07, album08, album09, album10, album11, album12, album13, album14, album15, album16]

const removeHttpPictures = false
if (removeHttpPictures) {
  for (let a = 0; a < albums.length; a++) {
    // const before = albums[a].pictures.length
    albums[a].pictures = albums[a].pictures.filter(picture => !picture.image.link.startsWith('http://'))
    // const after = albums[a].pictures.length
    // console.log(albums[a].name, before, '->', after)
    for (const picture of albums[a].pictures) {
      if (picture.image.link.startsWith('http://')) {
        console.warn('Image ' + picture.image.link)
        picture.image.link = picture.image.link.replace('http://', 'https://')
      }
    }
  }
} // else !removeHttpPictures

//
let pictures = albums.reduce((a, b) => a.concat(b.pictures[0]), [])
const overviewAlbum = {
  pictures
}

//
module.exports = {
  albums,
  overviewAlbum
}
