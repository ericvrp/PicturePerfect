import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class extends Component {
  render() {
    return (
      <img onClick={browserHistory.push.bind(this, '/')} src='/red-close-button.png' className='TheBigRedButton' alt='Home' />
    )
  }
}
