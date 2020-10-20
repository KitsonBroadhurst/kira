import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import RouteWithLayout from './shared/components/RouteWithLayout'

import Board from './pages/board/Board'

enum routes {
  Home = '/',
  Board = '/board',
  Settings = '/settings'
}

const Routes = () => {
  return(
    <Router>
      <Switch>
        <Redirect
          exact
          from={routes.Home}
          to={routes.Board}
        />
        <RouteWithLayout
          component={Board}
          layout={(props) => <div>{props.children}</div>}
          path={routes.Board}
        />
      </Switch>
    </Router>
  )
}

export default Routes