import React, { Component } from 'react'
import albums from './all-albums'
import Thumbnail from './Thumbnail'
import AlbumsHeader from './AlbumsHeader'

class Album extends Component {
  render() {
    const {albumNum = 0} = this.props.params
    const album = albums[albumNum]
    return (
      <div>
        { /* <AlbumsHeader /> */ }
        <div className='Album'>
          { album.pictures.map((picture, pictureNum) => <Thumbnail albumNum={albumNum} pictureNum={pictureNum} key={pictureNum} rowHeight={128} />) }
        </div>
      </div>
    )
  }
}

export default Album
