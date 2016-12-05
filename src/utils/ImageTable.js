import React, { Component } from 'react'
import { List } from 'react-virtualized'

const NumberOfColumns = (album, startIndex, preferredNumColumns) => {
  return Math.min(preferredNumColumns, album.pictures.length - startIndex)
}

const RowHeight = (album, startIndex, numberOfColumns, margin) => {
  let totalRatio = 0

  for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
    const pictureIndex = startIndex + columnIndex
    const ratio = album.pictures[pictureIndex].image.width / album.pictures[pictureIndex].image.height
    totalRatio += ratio
  }

  const rowHeight = parseInt((window.innerWidth - numberOfColumns * 2 * margin) / totalRatio, 10)
  console.log('RowHeight', startIndex, rowHeight)
  return rowHeight
}

const range = n => {
  const a = []
  for (let i = 0; i < n; i++) a.push(i)
  return a
}

const ImageRow = ({thumbnailComponent, album, albumNum, startIndex, numberOfColumns, margin}) => {
  const rowHeight = RowHeight(album, startIndex, numberOfColumns, margin)
  const Thumbnail = thumbnailComponent // because React needs a starting capital for JSX tags
  return (
    <div className='ImageTableRow'>
      {range(numberOfColumns).map((_, columnIndex) => <Thumbnail album={album} albumNum={albumNum} index={startIndex + columnIndex} rowHeight={rowHeight} key={startIndex + columnIndex} />)}
    </div>
  )
}

export default class extends Component {
  constructor(props) {
    super(props)

    this._rowRenderer = this._rowRenderer.bind(this)
    this._getRowHeight = this._getRowHeight.bind(this)
  }

  _getRowHeight({index}) {
    const rowIndex = index
    const {album, preferredNumColumns, margin} = this.props
    const startIndex = preferredNumColumns * rowIndex
    const numberOfColumns = NumberOfColumns(album, startIndex, preferredNumColumns, margin)
    const rowHeight = RowHeight(album, startIndex, numberOfColumns, margin)
    // console.log('_getRowHeight', rowIndex, 'has rowHeight', rowHeight)
    return rowHeight
  }

  _rowRenderer({index, key}) {
    const rowIndex = index
    // console.log('_rowRenderer', rowIndex, key)

    const {thumbnailComponent, album, albumNum, preferredNumColumns, margin} = this.props
    const startIndex = preferredNumColumns * rowIndex
    const numberOfColumns = NumberOfColumns(album, startIndex, preferredNumColumns, margin)

    return (
      <ImageRow thumbnailComponent={thumbnailComponent} album={album} albumNum={albumNum} startIndex={startIndex} numberOfColumns={numberOfColumns} margin={margin} key={key} />
    )
  }

  render() {
    // const {thumbnailComponent, album, albumNum, preferredNumColumns, margin} = this.props
    // const rows = []
    // for (let startIndex = 0; startIndex < album.pictures.length;) {
    //   const numberOfColumns = NumberOfColumns(album, startIndex, preferredNumColumns, margin)
    //   rows.push({
    //     startIndex,
    //     numberOfColumns
    //   })
    //   startIndex += numberOfColumns
    // }

    // https: //github.com/bvaughn/react-virtualized/blob/master/source/List/List.example.js
    /*
    <List
    ref='List'
    className={styles.List}
    height={listHeight}
    overscanRowCount={overscanRowCount}
    noRowsRenderer={this._noRowsRenderer}
    rowCount={rowCount}
    rowHeight={useDynamicRowHeight ? this._getRowHeight : listRowHeight}
    rowRenderer={this._rowRenderer}
    scrollToIndex={scrollToIndex}
    width={width}
    />
    */
    console.log('-----------------------')
    const rowCount = parseInt(this.props.album.pictures.length / this.props.preferredNumColumns, 10)

    return (
      <div className='ImageTable'>
        <List
      ref='List'
      width={window.innerWidth}
      height={window.innerHeight / 2}
      rowHeight={this._getRowHeight}
      overscanRowCount={5}
      rowCount={rowCount}
      rowRenderer={this._rowRenderer}
      />
        { /*
        <hr />

        {rows.map(row => <ImageRow thumbnailComponent={thumbnailComponent} album={album} albumNum={albumNum} startIndex={row.startIndex} numberOfColumns={row.numberOfColumns} margin={margin} key={row.startIndex} />)}
        */ }
      </div>
    )
  }
}
