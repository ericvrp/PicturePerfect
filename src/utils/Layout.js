import React from 'react'

const NumberOfColumns = (album, startIndex, preferredNumColumns) => {
  const n = Math.min(preferredNumColumns, album.pictures.length - startIndex)
  // console.log(startIndex, album.pictures.length, n)
  return n
}

const RowHeight = (album, startIndex, numberOfColumns, margin) => {
  let totalRatio = 0

  for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
    const pictureIndex = startIndex + columnIndex
    const ratio = album.pictures[pictureIndex].image.width / album.pictures[pictureIndex].image.height
    // console.log(pictureIndex, 'ratio', ratio)
    totalRatio += ratio
  }
  // console.log(startIndex, 'total', totalRatio)
  // console.log()

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


const ImageTable = ({thumbnailComponent, album, albumNum, preferredNumColumns, margin}) => { // note: stateless component
  const rows = []
  for (let startIndex = 0; startIndex < album.pictures.length;) {
    const numberOfColumns = NumberOfColumns(album, startIndex, preferredNumColumns, margin)
    rows.push({
      startIndex,
      numberOfColumns
    })
    startIndex += numberOfColumns
  }

  return (
    <div className='ImageTable'>
      {rows.map(row => <ImageRow thumbnailComponent={thumbnailComponent} album={album} albumNum={albumNum} startIndex={row.startIndex} numberOfColumns={row.numberOfColumns} margin={margin} key={row.startIndex} />)}
    </div>
  )
}


export default {
  NumberOfColumns,
  RowHeight,
  ImageTable,
}
