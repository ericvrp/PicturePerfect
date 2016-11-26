import React, { Component } from 'react'
import Layout from './utils/Layout'
import albums from './all-albums'
import ImageThumbnail from './ImageThumbnail'
import TheBigRedButton from './TheBigRedButton'

export default class extends Component {
  renderRow = (albumNum, startIndex) => {
    const album = albums[albumNum]
    const columns = []
    const numberOfColumns = Layout.NumberOfColumns(album, startIndex, 4)
    const rowHeight = Layout.RowHeight(album, startIndex, numberOfColumns)

    // columns.push(<div>)
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      const pictureIndex = startIndex + columnIndex
      columns.push(<ImageThumbnail albumNum={albumNum} pictureNum={pictureIndex} key={pictureIndex} rowHeight={rowHeight} />)
    }
    columns.push(<br key={100000 + startIndex} />) // XXX I tried to put a div around the above loop but I couldn't get it to work

    return [startIndex + numberOfColumns, columns]
  }

  renderAllRows = (albumNum) => {
    const nPictures = 20 // albums[albumNum].length;
    let allRows = []
    let columns
    for (let pictureIndex = 0; pictureIndex < nPictures;) {
      [pictureIndex, columns] = this.renderRow(albumNum, pictureIndex)
      allRows = allRows.concat(columns)
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
