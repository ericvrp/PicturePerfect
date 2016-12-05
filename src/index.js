import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import AlbumsOverview from './AlbumsOverview'
import Album from './Album'
import Image from './Image'
import NotFound from './NotFound'

import inobounce from 'inobounce'
inobounce.enable()
// console.log(inobounce.isEnabled())
document.body.addEventListener('touchMove', function(event) {
  event.stopPropagation()
// console.log('touchmove stopPropagation')
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={AlbumsOverview} />
      <Route path='album/:albumNum' component={Album} />
      <Route path='image/:albumNum/:pictureNum' component={Image} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
  ), document.getElementById('root'))
