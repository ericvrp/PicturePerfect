import React, { Component } from 'react'
import ImageTable from './utils/ImageTable'
import { albums } from './all-albums'
import ImageThumbnail from './ImageThumbnail'
import TheBigRedButton from './TheBigRedButton'

export default class extends Component {
  render() {
    const {albumNum = 0} = this.props.params
    return (
      <div className='Album'>
        <ImageTable imageComponent={ImageThumbnail} album={albums[albumNum]} albumNum={albumNum} preferredNumColumns={4} margin={3} nRepeats={42} />
        <TheBigRedButton router={this.props.router}/>
      </div>
    )
  }
}
