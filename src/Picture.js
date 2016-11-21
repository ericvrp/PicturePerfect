import React, { Component } from 'react'

class Picture extends Component {
  render() {
    const {picture} = this.props
    return (
      <span className='Album-Picture'>
        { <img src={picture.thumbnail.link} alt='' /> }
      </span>
    )
  }
}

export default Picture
