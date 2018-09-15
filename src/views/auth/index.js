import { h } from 'preact'
import { Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from 'scripts/async-component'

const Login = asyncComponent(() =>
  import(/* webpackChunkName: "auth-login" */ './login').then(
    module => module.default
  )
)

const Register = asyncComponent(() =>
  import(/* webpackChunkName: "auth-register" */ './register').then(
    module => module.default
  )
)

export default function Auth() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Redirect exact from="/panel" to="/login" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  )
}
