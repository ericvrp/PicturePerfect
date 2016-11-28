import React, { Component } from 'react'
import Layout from './utils/Layout'
import AlbumThumbnail from './AlbumThumbnail'
// import { combinedAlbum as overviewAlbum } from './all-albums'
import { overviewAlbum } from './all-albums'

// console.log('overviewAlbum.length', overviewAlbum.pictures.length)

export default class extends Component {
  render() {
    return (
      <div className='AlbumsOverview'>
        <Layout.ImageTable thumbnailComponent={AlbumThumbnail} album={overviewAlbum} preferredNumColumns={3} margin={6} />
      </div>
    )
  }
}
