import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  render() {
    return (
      <Link href='/'><img src='/red-close-button.png' className='TheBigRedButton' alt='Home' /></Link>
    )
  }
}
