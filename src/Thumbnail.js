import React, { Component } from 'react'
import { Link } from 'react-router'

class Thumbnail extends Component {
  render() {
    const {picture, rowHeight} = this.props
    // console.log(rowHeight)
    return (
      <span className='Thumbnail'>
        { <Link href={'/image/' + encodeURIComponent(picture.image.link)}><img src={picture.thumbnail.link} alt='' height={rowHeight} /></Link> }
      </span>
    )
  }
}

export default Thumbnail
