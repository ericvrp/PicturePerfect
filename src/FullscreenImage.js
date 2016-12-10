import React, { Component } from 'react'
import Image from './utils/Image'
import { albums } from './all-albums'

export default class extends Component {
  render() {
    const {albumNum = 0} = this.props.params
    const {pictureNum = 0} = this.props.params
    const {image} = albums[albumNum].pictures[pictureNum]
    const scale = 0.95 * Math.min(window.innerWidth / image.width, window.innerHeight / image.height)

    return (
      <div>
        <Image onClick={this.props.router.goBack} src={image.link} style={{filter:'blur(5px)'}} className='CenterBothDirections' width={window.innerWidth} height={window.innerHeight} />
        <Image onClick={this.props.router.goBack} src={image.link} resolution={1024} className='CenterBothDirections Image' width={image.width * scale} height={image.height * scale} />
      </div>
    )
  }
}
