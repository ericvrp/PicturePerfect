import React, { Component } from 'react'
import ProgressiveImage from './utils/ProgressiveImage'
import albums from './all-albums'

// const hiresImage = new Image()

export default class extends Component {
  render() {
    const {albumNum = 0} = this.props.params
    const {pictureNum = 0} = this.props.params
    const {image, thumbnail} = albums[albumNum].pictures[pictureNum]
    const scale = 0.95 * Math.min(window.innerWidth / image.width, window.innerHeight / image.height)

    return (
      <div onClick={this.props.router.goBack} onTouchEnd={this.props.router.goBack} width={image.width} height={image.height}>
        <img src={thumbnail.link} className='Dimmed Blurred' alt='' width={window.innerWidth} height={window.innerHeight} />
        <ProgressiveImage src={image.link} lowresSrc={thumbnail.link} className='Image' width={image.width * scale} height={image.height * scale} />
      </div>
    )
  }
}
