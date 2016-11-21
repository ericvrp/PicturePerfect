import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class Image extends Component {
  render() {
    return (
      <span className='Album-Picture'>
        { <a onClick={browserHistory.goBack}><img src={decodeURIComponent(this.props.params.link)} alt='' /></a> }
      </span>
    )
  }
}

export default Image
