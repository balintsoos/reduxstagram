/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'

// import css
import css from './styles/style.styl'

// import components
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// import react router
import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="view/:id" component={Single} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
