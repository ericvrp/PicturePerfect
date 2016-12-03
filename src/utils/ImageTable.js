import React, { Component } from 'react'
// import { List } from 'react-virtualized'

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

  return parseInt((window.innerWidth - numberOfColumns * 2 * margin) / totalRatio, 10)
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
  }

  _rowRenderer({index, isScrolling, key, style}) {
    console.log('_rowRenderer', index, isScrolling, key) //, style)
  // const {thumbnailComponent, album, albumNum, preferredNumColumns, margin} = this.props
  //<ImageRow thumbnailComponent={thumbnailComponent} album={album} albumNum={albumNum} startIndex={row.startIndex} numberOfColumns={row.numberOfColumns} margin={margin} key={row.startIndex} />
  }

  render() {
    const {thumbnailComponent, album, albumNum, preferredNumColumns, margin} = this.props
    const rows = []
    for (let startIndex = 0; startIndex < album.pictures.length;) {
      const numberOfColumns = NumberOfColumns(album, startIndex, preferredNumColumns, margin)
      rows.push({
        startIndex,
        numberOfColumns
      })
      startIndex += numberOfColumns
    }

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

    return (
      <div className='ImageTable'>

      { /*
      <List
      ref='List'
      className='EricsList'
      rowCount={album.pictures.length}
      width={window.innerWidth}
      height={60}
      rowHeight={20}
      overscanRowCount={1}
      rowRenderer={this._rowRenderer}
      scrollToIndex={0}
      />

      <hr />
      */ }

      {rows.map(row => <ImageRow thumbnailComponent={thumbnailComponent} album={album} albumNum={albumNum} startIndex={row.startIndex} numberOfColumns={row.numberOfColumns} margin={margin} key={row.startIndex} />)}
    </div>
    )
  }
}
