import { h } from 'preact'
import { Switch, Route, Redirect } from 'react-router-dom'

import UserActivity from './user-activity'
import UserSettings from './user-settings'

import style from './styles.scss'

export default function ContentColumn () {
  return (
    <div class={style.contentColumn}>
      <Switch>
        <Redirect exact from='/' to='/activity' />
        <Route
          exact
          path='/activity'
          component={UserActivity} />
        <Route
          exact
          path='/settings'
          component={UserSettings} />
      </Switch>
    </div>
  )
}
