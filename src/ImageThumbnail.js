import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import albums from './all-albums'

export default class extends Component {
  onClick = (albumNum, pictureNum) => {
    console.log('onClick', albumNum, pictureNum)
    const link = '/image/' + albumNum + '/' + pictureNum
    browserHistory.push(link)
  }

  render() {
    const {albumNum, pictureNum, rowHeight} = this.props
    const {image, thumbnail} = albums[albumNum].pictures[pictureNum]
    const scale = rowHeight / image.height
    const width = parseInt(image.width * scale, 10)
    const height = parseInt(image.height * scale, 10)
    return (
      <img onClick={browserHistory.push.bind(this, '/image/' + albumNum + '/' + pictureNum)} src={thumbnail.link} alt='' className='ImageThumbnail' width={width} height={height} />
    )
  }
}
