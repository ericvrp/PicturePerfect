import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Setup from './Setup'
import AlbumsOverview from './AlbumsOverview'
import Album from './Album'
import FullscreenImage from './FullscreenImage'
import NotFound from './NotFound'
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDgKI4OIQy7YVgn52v7BDCm9Yk-GdVXmUQ",
  authDomain: "pictureperfect-150016.firebaseapp.com",
  databaseURL: "https://pictureperfect-150016.firebaseio.com",
  storageBucket: "pictureperfect-150016.appspot.com",
  messagingSenderId: "1035547951000"
}
firebase.initializeApp(config)

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={AlbumsOverview} />
      <Route path='setup' component={Setup} />
      <Route path='album/:albumNum' component={Album} />
      <Route path='image/:albumNum/:pictureNum' component={FullscreenImage} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
  ), document.getElementById('root'))
