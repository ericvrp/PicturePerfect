import React, { Component } from 'react'
import 'react-fastclick'
import FullScreen from 'react-fullscreen';
import './App.css'

import inobounce from 'inobounce'
inobounce.enable()
// console.log(inobounce.isEnabled())
// document.body.addEventListener('touchMove', function(event) {
//   event.preventDefault();
//   console.log('touchmove preventDefault')
// });

export default class extends Component {
  render() {
    return (
      <FullScreen className='App'>
        {this.props.children}
      </FullScreen>
    )
  }
}
