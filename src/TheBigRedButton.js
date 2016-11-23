import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  render() {
    return (
      <Link href='/'><img src='/the-big-red-button.png' className='TheBigRedButton' alt='Home' /></Link>
    )
  }
}
