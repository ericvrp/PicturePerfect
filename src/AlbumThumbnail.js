import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ProgressiveImage from './utils/ProgressiveImage'

export default class extends Component {
  render() {
    const {album, index, imageHeight} = this.props
    const {image} = album.pictures[index % album.pictures.length]
    const scale = imageHeight / image.height
    // console.log(scale, image.link)
    return (
      <ProgressiveImage onClick={browserHistory.push.bind(this, '/album/' + index)} className='AlbumThumbnail' lowresFilter={null} lowresSrc={image.link} width={image.width * scale} height={imageHeight} />
    )
  }
}
