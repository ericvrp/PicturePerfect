import React, { Component } from 'react'
import AlbumThumbnail from './AlbumThumbnail'
import albums from './all-albums'

export default class extends Component {
  albumHeight = 250

  render() {
    return (
      <div className='AlbumsOverview'>
        { albums.map((album, albumNum) => <AlbumThumbnail albumNum={albumNum} key={albumNum} albumHeight={this.albumHeight} />) }
      </div>
    )
  }
}
