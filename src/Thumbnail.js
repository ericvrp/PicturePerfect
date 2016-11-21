import React, { Component } from 'react'

class Thumbnail extends Component {
  render() {
    const {picture} = this.props
    // const url = '/picture/' + picture.image.link
    const url = picture.image.link
    return (
      <span className='Album-Picture'>
        { <a href={url}><img src={picture.thumbnail.link} alt='' /></a> }
      </span>
    )
  }
}

export default Thumbnail
