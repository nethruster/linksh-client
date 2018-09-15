import { h, Component } from 'preact'
import { connect } from 'unistore/preact'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from 'scripts/async-component'
import { checkSessionIntegrity } from 'scripts/utils'

import { actions } from 'store'

const Auth = asyncComponent(() =>
  import(/* webpackChunkName: "auth" */ './views/auth/').then(
    module => module.default
  )
)

const Panel = asyncComponent(() =>
  import(/* webpackChunkName: "panel" */ './views/panel/').then(
    module => module.default
  )
)

export default connect(
  'auth',
  actions
)(function Router({ auth }) {
  return (
    <BrowserRouter>
      {auth.state && checkSessionIntegrity() ? <Panel /> : <Auth />}
    </BrowserRouter>
  )
})
