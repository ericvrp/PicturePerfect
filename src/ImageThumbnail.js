import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class extends Component {
  render() {
    const {album, albumNum, index, imageHeight} = this.props
    const _index = index % album.pictures.length
    const {thumbnail, image} = album.pictures[_index]
    const scale = imageHeight / thumbnail.height
    const width = parseInt(thumbnail.width * scale, 10)
    // console.log(scale, thumbnail.link)
    return (
      <img onClick={browserHistory.push.bind(this, '/image/' + albumNum + '/' + _index)} src={image.link} alt='' className='ImageThumbnail' width={width} height={imageHeight} />
    )
  }
}
