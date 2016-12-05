import album01 from './pippi_langkous'
import album02 from './ernst_bobbie_en_de_rest'
import album03 from './bassie_en_adriaan'
import album04 from './sinterklaas'
import album05 from './zwarte_piet'
import album06 from './pakjesboot'
import album07 from './ome_willem'
import album08 from './swiebertje'
import album09 from './brum'
import album10 from './kabouter_plop'
import album11 from './samson_en_gert'
import album12 from './piet_piraat'
import album13 from './dora'
import album14 from './teletubbies'
import album15 from './zandkasteel_aan_zee'
import album16 from './pipo_de_clown'

const albums = [album01, album02, album03, album04, album05, album06, album07, album08, album09, album10, album11, album12, album13, album14, album15, album16]

const removeHttpPictures = true
if (removeHttpPictures) {
  for (let a = 0; a < albums.length; a++) {
    // const before = albums[a].pictures.length
    albums[a].pictures = albums[a].pictures.filter(picture => !picture.image.link.startsWith('http://'))
    // const after = albums[a].pictures.length
    // console.log(albums[a].name, before, '->', after)
    for (const picture of albums[a].pictures) {
      if (picture.thumbnail.link.startsWith('http://')) {
        console.warn('Thumbnail ' + picture.thumbnail.link)
        picture.thumbnail.link = picture.thumbnail.link.replace('http://', 'https://')
      }
      if (picture.image.link.startsWith('http://')) {
        console.warn('Image ' + picture.image.link)
        picture.image.link = picture.image.link.replace('http://', 'https://')
      }
    }
  }
} // else !removeHttpPictures
export default albums

let pictures = albums.reduce((a, b) => a.concat(b.pictures[0]), [])
const overviewAlbum = {
  pictures
}
export { overviewAlbum }
