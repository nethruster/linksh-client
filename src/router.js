import { h } from 'preact'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from 'scripts/async-component'

const Login = asyncComponent(() =>
  import(/* webpackChunkName: "login" */ './views/login').then(
    module => module.default
  )
)

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
