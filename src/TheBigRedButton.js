import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <img onClick={this.props.router.goBack} src='/red-close-button.png' className='TheBigRedButton' alt='Home' />
    )
  }
}
