import React, { Component } from 'react'
import { Link } from 'react-router'
// import ProgressiveImage from './utils/ProgressiveImage'
import albums from './all-albums'

export default class extends Component {
  render() {
    const {albumNum, pictureNum, rowHeight} = this.props
    const {image, thumbnail} = albums[albumNum].pictures[pictureNum]
    const scale = rowHeight / image.height
    return (
      <Link href={'/image/' + albumNum + '/' + pictureNum}>
        { /*<ProgressiveImage src={image.link} lowresSrc={thumbnail.link} lowresFilter={null} className='ImageThumbnail' width={image.width * scale} height={image.height * scale} />*/ }
        <img src={thumbnail.link} alt='' className='ImageThumbnail' width={image.width * scale} height={image.height * scale} />
      </Link>
    )
  }
}
