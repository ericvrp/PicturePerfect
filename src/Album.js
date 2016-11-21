import React, { Component } from 'react'
import Thumbnail from './Thumbnail'

class Album extends Component {
  render() {
    const {album} = this.props
    return (
      <div className='Album'>
        { /* <div>{ album.name }</div> */ }
        <div>
          { album.pictures.map((picture, pictureIndex) => <Thumbnail picture={picture} key={pictureIndex} />) }
        </div>
        { /* <hr /> */ }
      </div>
    )
  }
}

export default Album
