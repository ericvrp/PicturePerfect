import React, { Component, PropTypes } from 'react'

// from: https://raw.githubusercontent.com/Dean177/react-progressive-image/master/progressive-image.js

export default class extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    lowresSrc: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      hasImageLoaded: false,
    }

    // load hires version so we can replace the thumbnail asap
    this.hiresImage = new Image()
    this.hiresImage.onload = this.onImageLoaded
    this.hiresImage.src = props.src
  }

  onImageLoaded = () => {
    this.setState({
      hasImageLoaded: true
    })
  }

  render() {
    const {src, lowresSrc, lowresFilter='blur(3px)', width, height, alt='', className = 'ProgressiveImage'} = this.props
    // console.log(this.props)
    return (
      <img className={className}
      src={this.state.hasImageLoaded ? src : lowresSrc}
      alt={alt}
      width={width}
      height={height}
      style={{
        filter: this.state.hasImageLoaded ? null : lowresFilter
      }}
      />
    )
  }
}
