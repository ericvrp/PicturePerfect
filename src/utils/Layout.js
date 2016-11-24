const NumberOfColumns = (album, startIndex) => {
  const n = Math.min(3, album.pictures.length - startIndex)
  // console.log(startIndex, album.pictures.length, n)
  return n
}

const RowHeight = (album, startIndex, numberOfColumns, desiredWidth = window.innerWidth * 0.99) => {
  let totalRatio = 0

  for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
    const pictureIndex = startIndex + columnIndex
    const padding = 1 // see .ImageThumbnail in App.css
    const ratio = (album.pictures[pictureIndex].image.width + 2 * padding) / album.pictures[pictureIndex].image.height
    // console.log(pictureIndex, 'ratio', ratio)
    totalRatio += ratio
  }
  // console.log(startIndex, 'total', totalRatio)
  // console.log()

  return desiredWidth / totalRatio
}



export default {
  NumberOfColumns,
  RowHeight
}
