import React, { Component } from 'react'
import Layout from './utils/Layout'
// import AlbumThumbnail from './AlbumThumbnail'
import albums from './all-albums'

export default class extends Component {
  render() {
    const overviewAlbum = {
      pictures: albums.reduce((a, b) => a.concat(b.pictures[0]), [])
    }

    return (
      <div className='AlbumsOverview'>
        <Layout.ImageTable album={overviewAlbum} preferredNumColumns={3} padding={20} />
      </div>
    )
  }
}
