import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory /*, applyRouterMiddleware*/ } from 'react-router'
// import useScroll from 'react-router-scroll/lib/useScroll'
import App from './App'
import AlbumsOverview from './AlbumsOverview'
import Album from './Album'
import Image from './Image'
import NotFound from './NotFound'

// const useScrollCallback = (prevRouterProps, {routes}) => {
//   // console.log(prevRouterProps)
//   return [0, 200]
// }

ReactDOM.render((
  // render={applyRouterMiddleware(useScroll(useScrollCallback))}
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={AlbumsOverview} />
      <Route path='album/:albumNum' component={Album} />
      <Route path='image/:albumNum/:pictureNum' component={Image} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
  ), document.getElementById('root'))
