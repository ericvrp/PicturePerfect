import React, { Component } from 'react'
import { Link } from 'react-router'
import albums from './all-albums'

export default class extends Component {
  render() {
    const {albumNum, pictureNum, rowHeight} = this.props
    const picture = albums[albumNum].pictures[pictureNum]
    return (
      <Link href={'/image/' + albumNum + '/' + pictureNum}>
        <img src={picture.thumbnail.link} className='ImageThumbnail' alt='' height={rowHeight} />
      </Link>
    )
  }
}
