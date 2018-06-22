import { h } from 'preact'
import { connect } from 'unistore/preact'

import { actions } from 'store'

import IconButton from '../../../../../../shared/icon-button'

import style from './styles.scss'

export default connect(
  'mobileViewportState',
  actions
)(({ ip, date, mobileViewportState }) => {
  let isCurrentSession = date === 'current'
  let currentText = mobileViewportState
    ? 'Close others'
    : 'Terminate all other sessions'
  return (
    <li>
      <ul class={style.tableItem}>
        <li class={`flex flex-cross-center ${style.hideSmall}`}>
          <p>{ip}</p>
        </li>
        <li class="flex flex-cross-center">
          <p>{isCurrentSession ? 'Currently active' : date}</p>
        </li>
        <li class="flex flex-cross-center">
          <a class={`${isCurrentSession && style.removeAllSessions}`}>
            {isCurrentSession ? currentText : <IconButton icon="close" />}
          </a>
        </li>
      </ul>
    </li>
  )
})
