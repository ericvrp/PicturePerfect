import React, { Component } from 'react'
// import { Link, browserHistory } from 'react-router'
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
        <img src={thumbnail.link} className='Dimmed Blurred' alt='' width={window.innerWidth} height={window.innerHeight} />
        <ProgressiveImage onClick={this.props.router.goBack} src={image.link} lowresSrc={thumbnail.link} className='Image' width={image.width * scale} height={image.height * scale} />
      </div>
    )
  }
}
