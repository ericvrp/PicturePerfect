import React, { Component } from 'react'
import albums from './all-albums'

class AlbumsHeader extends Component {
  render() {
    return (
      <div className='AlbumsHeader'>
        AlbumsHeader ({albums.length}x) goes here
      </div>
    )
  }
}

export default AlbumsHeader
