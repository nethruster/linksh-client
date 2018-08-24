import { h } from 'preact'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from 'scripts/async-component'
import { checkUserAuthentication } from 'scripts/utils'

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

export default function Router() {
  return (
    <BrowserRouter>
      {checkUserAuthentication() ? <Panel /> : <Auth />}
    </BrowserRouter>
  )
}
