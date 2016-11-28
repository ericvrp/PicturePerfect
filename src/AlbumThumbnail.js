import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ProgressiveImage from './utils/ProgressiveImage'

export default class extends Component {
  render() {
    const {album, albumNum, albumHeight} = this.props
    const {image, thumbnail} = album.pictures[albumNum]
    const scale = albumHeight / image.height
    return (
      <ProgressiveImage onClick={browserHistory.push.bind(this, '/album/' + albumNum)} className='AlbumThumbnail' src={image.link} lowresSrc={thumbnail.link} width={image.width * scale} height={image.height * scale} />
    )
  }
}
