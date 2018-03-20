import { h } from 'preact'

import IconButton from '../../../../../../shared/icon-button'

import style from './styles.scss'

export default function TableItem ({ ip, date }) {
  let isCurrentSession = date === 'current'
  return (
    <li>
      <ul class={style.tableItem}>
        <li class='flex flex-cross-center'>
          <p>{ip}</p>
        </li>
        <li class='flex flex-cross-center'>
          <p>{isCurrentSession ? 'Currently active' : date}</p>
        </li>
        <li class='flex flex-cross-center'>
          <a class={`${isCurrentSession && style.removeAllSessions}`}>
            {isCurrentSession ? 'Terminate all other sessions' : <IconButton icon='close' />}
          </a>
        </li>
      </ul>
    </li>
  )
}
