import React, { Component } from 'react'
import { List } from 'react-virtualized'
import ScreenSize from './ScreenSize'


const NumberOfColumns = (album, startIndex, preferredNumColumns) => {
  return Math.min(preferredNumColumns, album.pictures.length - startIndex)
}

const ImageHeight = (album, startIndex, numberOfColumns, margin) => {
  let totalRatio = 0

  for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
    const pictureIndex = startIndex + columnIndex
    const ratio = album.pictures[pictureIndex].image.width / album.pictures[pictureIndex].image.height
    totalRatio += ratio
  }

  const imageHeight = parseInt((ScreenSize().width - numberOfColumns * 2 * margin) / totalRatio, 10)
  // console.log('ImageHeight', startIndex, imageHeight)
  return imageHeight
}

const range = n => {
  const a = []
  for (let i = 0; i < n; i++) a.push(i)
  return a
}

const ImageRow = ({thumbnailComponent, album, albumNum, startIndex, numberOfColumns, margin, style}) => {
  const imageHeight = ImageHeight(album, startIndex, numberOfColumns, margin)
  const Thumbnail = thumbnailComponent // because React needs a starting capital for JSX tags
  // console.log('ImageRow', startIndex, imageHeight, style)
  return (
    <div className='ImageTableRow' style={style}>
      {range(numberOfColumns).map((_, columnIndex) => <Thumbnail album={album} albumNum={albumNum} index={startIndex + columnIndex} imageHeight={imageHeight} key={startIndex + columnIndex} />)}
    </div>
  )
}

export default class extends Component {
  constructor(props) {
    super(props)

    this._getRowHeight = this._getRowHeight.bind(this)
    this._rowRenderer = this._rowRenderer.bind(this)
  }

  _getRowHeight({index}) {
    const rowIndex = index
    const {album, preferredNumColumns, margin} = this.props
    const startIndex = preferredNumColumns * rowIndex
    const numberOfColumns = NumberOfColumns(album, startIndex, preferredNumColumns, margin)
    const imageHeight = ImageHeight(album, startIndex, numberOfColumns, margin)
    const rowHeight = imageHeight + 2 * margin
    // console.log('_getRowHeight', rowIndex, startIndex, rowHeight)
    return rowHeight
  }

  _rowRenderer({index, key, style}) {
    const rowIndex = index
    // console.log('_rowRenderer', rowIndex, key, style)
    // console.log(ScreenSize())

    const {thumbnailComponent, album, albumNum, preferredNumColumns, margin} = this.props
    const startIndex = preferredNumColumns * rowIndex
    const numberOfColumns = NumberOfColumns(album, startIndex, preferredNumColumns, margin)

    return (
      <ImageRow thumbnailComponent={thumbnailComponent} album={album} albumNum={albumNum} startIndex={startIndex} numberOfColumns={numberOfColumns} margin={margin} key={key} style={style} />
    )
  }

  render() {
    const rowCount = parseInt((this.props.album.pictures.length + this.props.preferredNumColumns - 1) / this.props.preferredNumColumns, 10)

    return (
      <div className='ImageTable'>
        <List
      ref='List'
      width={ScreenSize().width}
      height={ScreenSize().height}
      rowHeight={this._getRowHeight}
      overscanRowCount={2}
      rowCount={rowCount}
      rowRenderer={this._rowRenderer}
      />
      </div>
    )
  }
}
