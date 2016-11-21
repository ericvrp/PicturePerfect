import React, { Component } from 'react'
import albums from './all-albums'
import Thumbnail from './Thumbnail'

class Album extends Component {
  render() {
    const album = albums[parseInt(this.props.params.albumNum || 0, 10)]
    return (
      <div className='Album'>
        { album.pictures.map((picture, pictureIndex) => <Thumbnail picture={picture} key={pictureIndex} />) }
      </div>
    )
  }
}

export default Album
