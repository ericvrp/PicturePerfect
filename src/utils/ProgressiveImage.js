import React, { Component } from 'react'
import md5 from 'md5'

// from: https://raw.githubusercontent.com/Dean177/react-progressive-image/master/progressive-image.js

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiresSrcLoaded: false,
    }

    this.realLowresSrc = '/images/256/' + md5(props.lowresSrc) + '.jpg'

    if (props.hiresSrc) { // load hires version so we can replace the lowres image asap
      this.hiresImage = new Image()
      this.hiresImage.onload = this.onImageLoaded
      this.hiresImage.src = '/images/1024/' + md5(props.hiresSrc) + '.jpg'
    }
  }

  onImageLoaded = () => {
    this.setState({
      hiresSrcLoaded: true
    })
  }

  render() {
    const {lowresFilter='blur(3px)', width, height, onClick, alt='', className = 'ProgressiveImage'} = this.props
    // console.log(this.props)
    const src = this.state.hiresSrcLoaded ? this.hiresImage.src : this.realLowresSrc

    return (
      <img className={className}
      src={src}
      alt={alt}
      width={parseInt(width, 10)}
      height={parseInt(height, 10)}
      onClick={onClick}
      style={{
        filter: this.state.hiresSrcLoaded ? null : lowresFilter
      }}
      />
    )
  }
}
