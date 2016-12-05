import React, { Component } from 'react'
import { List } from 'react-virtualized'
import ScreenSize from './ScreenSize'


const NumberOfColumns = (nPictures, startIndex, preferredNumColumns) => {
  return Math.min(preferredNumColumns, nPictures - startIndex)
}

const ImageHeight = (album, startIndex, numberOfColumns, margin) => {
  let totalRatio = 0

  for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
    const pictureIndex = startIndex + columnIndex
    const {image} = album.pictures[pictureIndex % album.pictures.length]
    const ratio = image.width / image.height
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
  const realStartIndex = startIndex % album.pictures.length
  const Thumbnail = thumbnailComponent // because React needs a starting capital for JSX tags
  // console.log('ImageRow', startIndex, imageHeight, style)
  return (
    <div className='ImageTableRow' style={style}>
      {range(numberOfColumns).map((_, columnIndex) => <Thumbnail album={album} albumNum={albumNum} index={realStartIndex + columnIndex} imageHeight={imageHeight} key={realStartIndex + columnIndex} />)}
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
    const {album, preferredNumColumns, margin, nRepeats} = this.props
    const startIndex = preferredNumColumns * rowIndex
    const numberOfColumns = NumberOfColumns(album.pictures.length * nRepeats, startIndex, preferredNumColumns, margin)
    const imageHeight = ImageHeight(album, startIndex, numberOfColumns, margin)
    const rowHeight = imageHeight + 2 * margin
    // console.log('_getRowHeight', rowIndex, startIndex, rowHeight)
    return rowHeight
  }

  _rowRenderer({index, key, style}) {
    const rowIndex = index
    // console.log('_rowRenderer', rowIndex, key, style)
    // console.log(ScreenSize())

    const {thumbnailComponent, album, albumNum, preferredNumColumns, margin, nRepeats} = this.props
    const startIndex = preferredNumColumns * rowIndex
    const numberOfColumns = NumberOfColumns(album.pictures.length * nRepeats, startIndex, preferredNumColumns, margin)

    return (
      <ImageRow thumbnailComponent={thumbnailComponent} album={album} albumNum={albumNum} startIndex={startIndex} numberOfColumns={numberOfColumns} margin={margin} key={key} style={style} />
    )
  }

  render() {
    const rowCount = parseInt((this.props.album.pictures.length * this.props.nRepeats + this.props.preferredNumColumns - 1) / this.props.preferredNumColumns, 10)

    return (
      <div className='ImageTable'>
        <List
      ref='List'
      width={ScreenSize().width}
      height={ScreenSize().height}
      rowHeight={this._getRowHeight}
      overscanRowCount={10}
      rowCount={rowCount}
      scrollToIndex={parseInt(rowCount / 2, 10)}
      rowRenderer={this._rowRenderer}
      />
      </div>
    )
  }
}
