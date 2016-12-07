import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ProgressiveImage from './utils/ProgressiveImage'

export default class extends Component {
  render() {
    const {album, index, imageHeight} = this.props
    const _index = index % album.pictures.length
    const {image} = album.pictures[_index]
    const scale = imageHeight / image.height
    const width = image.width * scale
    // console.log(scale, image.link)
    return (
      <ProgressiveImage onClick={browserHistory.push.bind(this, '/album/' + _index)} className='AlbumThumbnail' lowresSrc={image.link} hiresSrc={image.link} width={width} height={imageHeight} />
    )
  }
}
