import React, { Component } from 'react'
import ProgressiveImage from './utils/ProgressiveImage'
import albums from './all-albums'

// const hiresImage = new Image()

export default class extends Component {
  // onImageLoaded = () => {
  //   // console.log('onImageLoaded')
  //   // console.log(this.refs.image)
  //   this.refs.image.src = hiresImage.src
  // }

  render() {
    const {albumNum = 0} = this.props.params
    const {pictureNum = 0} = this.props.params
    const {image, thumbnail} = albums[albumNum].pictures[pictureNum]
    const scale = 0.95 * Math.min(window.innerWidth / image.width, window.innerHeight / image.height)

    // load hires version so we can replace the thumbnail asap
    // hiresImage.onload = this.onImageLoaded
    // hiresImage.src = image.link

    return (
      <div onClick={this.props.router.goBack} onTouchEnd={this.props.router.goBack} width={image.width} height={image.height}>
        <img src={thumbnail.link} className='Blurred' alt='' width={window.innerWidth} height={window.innerHeight} />
        <ProgressiveImage src={image.link} lowresSrc={thumbnail.link} className='Image' width={image.width * scale} height={image.height * scale} />
      </div>
    )
  }
}
