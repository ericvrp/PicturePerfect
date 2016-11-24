import React, { Component } from 'react'
import { Link } from 'react-router'
import ProgressiveImage from './utils/ProgressiveImage'
import albums from './all-albums'

export default class extends Component {
  render() {
    const {albumNum, albumHeight} = this.props
    const {image, thumbnail} = albums[albumNum].pictures[0]
    const scale = albumHeight / image.height
    return (
      <Link href={'/album/' + albumNum}>
        <ProgressiveImage className='AlbumThumbnail' src={image.link} lowresSrc={thumbnail.link} width={image.width * scale} height={albumHeight} />
{ /*
        <img src={picture.image.link} className='AlbumThumbnail' alt='' height={albumHeight} />
*/ }
      </Link>
    )
  }
}
