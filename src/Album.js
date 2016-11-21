import React, { Component } from 'react'
import Picture from './Picture'

class Album extends Component {
  render() {
    const {album} = this.props
    return (
      <div className='Album'>
        <div>{ album.name }</div>
        <div>
          { album.pictures.map((picture, pictureIndex) => <Picture picture={picture} key={pictureIndex} />) }
          </div>
        <hr />
      </div>
    )
  }
}

export default Album
