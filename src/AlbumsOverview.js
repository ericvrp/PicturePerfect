import React, { Component } from 'react'
import ImageTable from './utils/ImageTable'
import AlbumThumbnail from './AlbumThumbnail'
import { overviewAlbum } from './all-albums'

export default class extends Component {
  render() {
    return (
      <div className='AlbumsOverview'>
        <ImageTable thumbnailComponent={AlbumThumbnail} album={overviewAlbum} preferredNumColumns={3} margin={6} nRepeats={666} />
      </div>
    )
  }
}
