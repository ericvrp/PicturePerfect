import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    // albums.map((album, albumIndex) => <Album album={album} key={albumIndex} />)
    // <Album album={albums[0]} />
    return (
      <div className='App'>
        {this.props.children}
      </div>
    )
  }
}

export default App
