const NumberOfColumns = (album, startIndex) => {
  const n = Math.min(3, album.pictures.length - startIndex)
  // console.log(startIndex, album.pictures.length, n)
  return n
}

const RowHeight = (album, startIndex, numberOfColumns, desiredWidth = window.innerWidth * 0.7) => {
  return 172
}



export default {
  NumberOfColumns,
  RowHeight
}
