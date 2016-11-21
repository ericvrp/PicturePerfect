import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Album from './Album'
import Image from './Image'
import './index.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Album} />
      <Route path='album/:albumNum' component={Album} />
      <Route path='image/:link' component={Image} />
    </Route>
  </Router>
  ), document.getElementById('root'))
