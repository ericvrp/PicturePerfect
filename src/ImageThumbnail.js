import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class extends Component {
  render() {
    const {album, albumNum, index, imageHeight} = this.props
    const {image, thumbnail} = album.pictures[index % album.pictures.length]
    const scale = imageHeight / image.height
    const width = parseInt(image.width * scale, 10)
    return (
      <img onClick={browserHistory.push.bind(this, '/image/' + albumNum + '/' + index)} src={thumbnail.link} alt='' className='ImageThumbnail' width={width} height={imageHeight} />
    )
  }
}
