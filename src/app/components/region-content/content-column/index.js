import { h } from 'preact'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'unistore/preact'

import { actions } from 'store'

import UserActivity from './user-activity'
import UserSettings from './user-settings'

import style from './styles.scss'

export default connect(
  'mobileViewportState',
  actions
)(({ mobileViewportState }) => {
  return (
    <div
      class={`${style.contentColumn} ${
        mobileViewportState ? style.mobile : ''
      }`}
    >
      <Switch>
        <Redirect exact from="/" to="/activity" />
        <Route exact path="/activity" component={UserActivity} />
        <Route exact path="/settings" component={UserSettings} />
      </Switch>
    </div>
  )
})
