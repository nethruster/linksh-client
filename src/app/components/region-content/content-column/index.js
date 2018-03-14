import { h } from 'preact'
import { connect } from 'unistore/preact'

import UserActivity from './user-activity'
import UserSettings from './user-settings'

import style from './styles.scss'

export default connect('activeSection')(({activeSection}) => {
  return (
    <div class={style.contentColumn}>
      {activeSection === 'uActivity' && <UserActivity />}
      {activeSection === 'uSettings' && <UserSettings />}
    </div>
  )
})
