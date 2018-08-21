import { h } from 'preact'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from 'scripts/async-component'

const Login = asyncComponent(() =>
  import(/* webpackChunkName: "auth-login" */ './views/auth/login').then(
    module => module.default
  )
)

const Register = asyncComponent(() =>
  import(/* webpackChunkName: "auth-register" */ './views/auth/register').then(
    module => module.default
  )
)

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}
