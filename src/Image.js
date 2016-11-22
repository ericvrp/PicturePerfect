import React, { Component } from 'react'
import albums from './all-albums'

class Image extends Component {
  render() {
    document.body.style.overflow = 'hidden'
    window.onclick = this.props.router.goBack

    const albumNum = parseInt(this.props.params.albumNum || 0, 10)
    const pictureNum = parseInt(this.props.params.pictureNum || 0, 10)
    const image = albums[albumNum].pictures[pictureNum].image

    const scale = Math.min(window.innerWidth / image.width, window.innerHeight / image.height)

    return (
      <div className='Image'>
        <img src={image.link} alt='' width={image.width * scale} height={image.height * scale} />
      </div>
    )
  }
}

export default Image
