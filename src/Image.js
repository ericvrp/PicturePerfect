import React, { Component } from 'react'
import albums from './all-albums'

class Image extends Component {
  render() {
    document.body.style.overflow = 'hidden'
    window.onclick = this.props.router.goBack

    const {albumNum = 0} = this.props.params
    const {pictureNum = 0} = this.props.params
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
