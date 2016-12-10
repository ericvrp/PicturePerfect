import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import AlbumsOverview from './AlbumsOverview'
import Album from './Album'
import FullscreenImage from './FullscreenImage'
import NotFound from './NotFound'

// https://github.com/taion/react-router-scroll/issues/15

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={AlbumsOverview} />
      <Route path='album/:albumNum' component={Album} />
      <Route path='image/:albumNum/:pictureNum' component={FullscreenImage} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
  ), document.getElementById('root'))
