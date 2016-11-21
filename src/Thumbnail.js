import React, { Component } from 'react'

class Thumbnail extends Component {
  render() {
    const {picture} = this.props
    return (
      <span className='Album-Picture'>
        { <a href={'/image/' + encodeURIComponent(picture.image.link)}><img src={picture.thumbnail.link} alt='' /></a> }
      </span>
    )
  }
}

export default Thumbnail
