import React, { Component } from 'react'
import ImageTable from './utils/ImageTable'
import AlbumThumbnail from './AlbumThumbnail'
import { overviewAlbum } from './all-albums'
import { combinedAlbum } from './all-albums'

export default class extends Component {
  render() {
    const album = 'combined' in this.props.router.location.query ? combinedAlbum : overviewAlbum
    return (
      <div className='AlbumsOverview'>
        <ImageTable thumbnailComponent={AlbumThumbnail} album={album} preferredNumColumns={3} margin={6} />
      </div>
    )
  }
}
