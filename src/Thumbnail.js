import React, { Component } from 'react'
import { Link } from 'react-router'
import albums from './all-albums'

class Thumbnail extends Component {
  render() {
    const {albumNum, pictureNum, rowHeight} = this.props
    const picture = albums[albumNum].pictures[pictureNum]
    // console.log(rowHeight)
    return (
      <span className='Thumbnail'>
        <Link href={'/image/' + albumNum + '/' + pictureNum}>
          <img src={picture.thumbnail.link} alt='' height={rowHeight} />
        </Link>
      </span>
    )
  }
}

export default Thumbnail
