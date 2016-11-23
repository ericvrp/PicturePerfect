import React, { Component } from 'react'
import { Link } from 'react-router'
import albums from './all-albums'

export default class extends Component {
  render() {
    const {albumNum, albumHeight} = this.props
    const picture = albums[albumNum].pictures[0]
    return (
      <Link href={'/album/' + albumNum}>
        <img src={picture.image.link} className='AlbumThumbnail' alt='' height={albumHeight} />
      </Link>
    )
  }
}
