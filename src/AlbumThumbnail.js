import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ProgressiveImage from './utils/ProgressiveImage'
import albums from './all-albums'

export default class extends Component {
  render() {
    const {albumNum, albumHeight} = this.props
    const {image, thumbnail} = albums[albumNum].pictures[0]
    const scale = albumHeight / image.height
    return (
      <ProgressiveImage onClick={browserHistory.push.bind(this, '/album/' + albumNum)} className='AlbumThumbnail' src={image.link} lowresSrc={thumbnail.link} width={image.width * scale} height={image.height * scale} />
    )
  }
}
