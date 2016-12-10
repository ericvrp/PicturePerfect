import React, {Component} from 'react'
import md5 from 'md5'

// from:
// https://raw.githubusercontent.com/Dean177/react-progressive-image/master/prog
// r essive-image.js

export default class extends Component {
  render() {
    const {
      src,
      width,
      height,
      onClick,
      resolution = 256,
      alt = '',
      style = {},
      className = 'Image'
    } = this.props
    // console.log(this.props)

    return (<img
      className={className}
      src={'/images/' + resolution + '/' + md5(src) + '.jpg'}
      alt={alt}
      width={parseInt(width, 10)}
      height={parseInt(height, 10)}
      onClick={onClick}
      style={style}/>)
  }
}
