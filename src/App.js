import React, { Component } from 'react'
import 'react-fastclick'
import FullScreen from 'react-fullscreen';
import './App.css'

export default class extends Component {
  render() {
    return (
      <FullScreen className='App'>
        {this.props.children}
      </FullScreen>
    )
  }
}
