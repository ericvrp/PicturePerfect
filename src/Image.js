import React, { Component } from 'react'
import albums from './all-albums'

class Image extends Component {
  render() {
    document.body.style.overflow = 'hidden'
    window.onclick = this.props.router.goBack

    const {albumNum = 0} = this.props.params
    const {pictureNum = 0} = this.props.params
    const {image, thumbnail} = albums[albumNum].pictures[pictureNum]

    const scale = 0.95 * Math.min(window.innerWidth / image.width, window.innerHeight / image.height)

    // document.body.style.backgroundImage = "url(" + image.link + ")"

    console.log(this.refs)

    return (
      <div>
        <img src={thumbnail.link} className='Blurred Image' alt='' width={window.innerWidth} height={window.innerHeight} />
        <img src={thumbnail.link} className='Image' alt='' ref='image' width={image.width * scale} height={image.height * scale} />
      </div>
    )
  }
}

export default Image
