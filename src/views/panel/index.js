// Links
// Settings
import { h } from 'preact'
import { Switch, Redirect, Route } from 'react-router-dom'

import asyncComponent from 'scripts/async-component'

const LinksTable = asyncComponent(() =>
  import(/* webpackChunkName: "panel-links" */ './links').then(
    module => module.default
  )
)

export default function Panel() {
  return (
    <Switch>
      <Redirect exact from="/" to="/panel" />
      <Route exact path="/panel" component={LinksTable} />
    </Switch>
  )
}
