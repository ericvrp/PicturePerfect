import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class extends Component {
  render() {
    const {album, albumNum, index, imageHeight} = this.props
    const {thumbnail} = album.pictures[index % album.pictures.length]
    const scale = imageHeight / thumbnail.height
    const width = parseInt(thumbnail.width * scale, 10)
    // console.log(scale, thumbnail.link)
    return (
      <img onClick={browserHistory.push.bind(this, '/image/' + albumNum + '/' + index)} src={thumbnail.link} alt='' className='ImageThumbnail' width={width} height={imageHeight} />
    )
  }
}
