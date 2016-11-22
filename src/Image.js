import React, { Component } from 'react'
import albums from './all-albums'

const highresImage = new Image()

export default class extends Component {
  onImageLoaded = () => {
    // console.log('onImageLoaded')
    // console.log(this.refs.image)
    this.refs.image.src = highresImage.src
  }

  render() {
    document.body.style.overflow = 'hidden'
    window.onclick = this.props.router.goBack

    const {albumNum = 0} = this.props.params
    const {pictureNum = 0} = this.props.params
    const {image, thumbnail} = albums[albumNum].pictures[pictureNum]
    const scale = 0.95 * Math.min(window.innerWidth / image.width, window.innerHeight / image.height)

    // load highres version so we can replace the thumbnail asap
    highresImage.onload = this.onImageLoaded
    highresImage.src = image.link

    return (
      <div>
        <img src={thumbnail.link} className='Blurred Image' alt='' width={window.innerWidth} height={window.innerHeight} />
        <img src={thumbnail.link} className='Image' alt='' ref='image' width={image.width * scale} height={image.height * scale} />
      </div>
    )
  }
}
