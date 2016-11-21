import React, { Component } from 'react'
import './App.css'
import Album from './Album'
import albums from './all-albums'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Album album={albums[0]} />
        { /* albums.map((album, albumIndex) => <Album album={album} key={albumIndex} />) */ }
      </div>
    )
  }
}

export default App;
