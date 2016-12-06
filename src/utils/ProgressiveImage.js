import React, { Component } from 'react'

// from: https://raw.githubusercontent.com/Dean177/react-progressive-image/master/progressive-image.js

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiresSrcLoaded: false,
    }

    // load hires version so we can replace the thumbnail asap
    if (props.hiresSrc) {
      this.hiresImage = new Image()
      this.hiresImage.onload = this.onImageLoaded
      this.hiresImage.src = props.hiresSrc
    } // don't load hiresSrc image
  }

  onImageLoaded = () => {
    this.setState({
      hiresSrcLoaded: true
    })
  }

  render() {
    const {lowresFilter='blur(3px)', lowresSrc, hiresSrc, width, height, onClick, alt='', className = 'ProgressiveImage'} = this.props
    // console.log(this.props)
    return (
      <img className={className}
      src={this.state.hiresSrcLoaded ? hiresSrc : lowresSrc}
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
