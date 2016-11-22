import React, { Component } from 'react'

class Image extends Component {
  render() {
    document.body.style.overflow = 'hidden'

    window.onclick = this.props.router.goBack

    return (
      <center>
        <img src={decodeURIComponent(this.props.params.link)} alt='' className='Image' />
      </center>
    )
  }
}

export default Image
