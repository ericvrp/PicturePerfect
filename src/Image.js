import React, { Component } from 'react'
import ProgressiveImage from './utils/ProgressiveImage'
import albums from './all-albums'

export default class extends Component {
  render() {
    const {albumNum = 0} = this.props.params
    const {pictureNum = 0} = this.props.params
    const {image, thumbnail} = albums[albumNum].pictures[pictureNum]
    const scale = 0.95 * Math.min(window.innerWidth / image.width, window.innerHeight / image.height)

    return (
      <div>
        <img onClick={this.props.router.goBack} src={thumbnail.link} className='CenterBothDirections Dimmed Blurred' alt='' width={window.innerWidth} height={window.innerHeight} />
        <ProgressiveImage onClick={this.props.router.goBack} src={image.link} lowresSrc={thumbnail.link} className='CenterBothDirections Image' width={image.width * scale} height={image.height * scale} />
      </div>
    )
  }
}
