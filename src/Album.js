import React, { Component } from 'react'
import albums from './all-albums'
import ImageThumbnail from './ImageThumbnail'
import TheBigRedButton from './TheBigRedButton'

export default class extends Component {
  rowHeight = 172

  render() {
    const {albumNum = 0} = this.props.params
    const album = albums[albumNum]
    return (
      <div>
        <div className='Album'>
          { album.pictures.map((picture, pictureNum) => <ImageThumbnail albumNum={albumNum} pictureNum={pictureNum} key={pictureNum} rowHeight={this.rowHeight} />) }
        </div>

        <TheBigRedButton />
      </div>
    )
  }
}
