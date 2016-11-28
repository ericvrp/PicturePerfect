import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ProgressiveImage from './utils/ProgressiveImage'

export default class extends Component {
  render() {
    const {album, index, rowHeight} = this.props
    const {image, thumbnail} = album.pictures[index]
    const scale = rowHeight / image.height
    return (
      <ProgressiveImage onClick={browserHistory.push.bind(this, '/album/' + index)} className='AlbumThumbnail' src={image.link} lowresSrc={thumbnail.link} width={image.width * scale} height={image.height * scale} />
    )
  }
}
