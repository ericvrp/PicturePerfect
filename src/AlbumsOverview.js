import React, { Component } from 'react'
import Layout from './utils/Layout'
import AlbumThumbnail from './AlbumThumbnail'
import albums from './all-albums'

export default class extends Component {
  // albumHeight = 250

  renderRow = (albumNum, startIndex) => {
    const album = albums[albumNum]
    const rows = []
    const numberOfColumns = 2 // Layout.NumberOfColumns(album, startIndex)
    const rowHeight = Layout.RowHeight(album, startIndex, numberOfColumns)

    // rows.push(<div>)
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      // const pictureIndex = startIndex + columnIndex
      rows.push(<AlbumThumbnail albumNum={albumNum} key={albumNum} albumHeight={rowHeight} />)
    }
    rows.push(<br key={100000 + startIndex}/>) // XXX I tried to put a div around the above loop but I couldn't get it to work

    return [startIndex + numberOfColumns, rows]
  }

  renderAllRows = (albumNum) => {
    const album = albums[albumNum]
    let allRows = []
    let rows
    for (let pictureIndex = 0; pictureIndex < album.pictures.length;) {
      [pictureIndex, rows] = this.renderRow(albumNum, pictureIndex)
      allRows = allRows.concat(rows)
    }

    return allRows
  }

  // { albums.map((album, albumNum) => <AlbumThumbnail albumNum={albumNum} key={albumNum} albumHeight={this.albumHeight} />) }

  render() {
    return (
      <div className='AlbumsOverview'>
        { /* this.renderAllRows() */ }
        { albums.map((album, albumNum) => <AlbumThumbnail albumNum={albumNum} key={albumNum} albumHeight={250} />) }
      </div>
    )
  }
}
