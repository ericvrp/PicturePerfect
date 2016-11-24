import React, { Component } from 'react'
import Layout from './utils/Layout'
import albums from './all-albums'
import ImageThumbnail from './ImageThumbnail'
import TheBigRedButton from './TheBigRedButton'

export default class extends Component {
  renderRow = (albumNum, startIndex) => {
    const album = albums[albumNum]
    const rows = []
    const numberOfColumns = Layout.NumberOfColumns(album, startIndex)
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      let pictureIndex = startIndex + columnIndex
      const rowHeight = Layout.RowHeight(album, startIndex, numberOfColumns)
      rows.push(<ImageThumbnail albumNum={albumNum} pictureNum={pictureIndex} key={pictureIndex} rowHeight={rowHeight} />)
    }

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

  render() {
    const {albumNum = 0} = this.props.params
    return (
      <div className='Album'>
        <TheBigRedButton />
        { this.renderAllRows(albumNum) }
      </div>
    )
  }
}
