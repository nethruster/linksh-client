import { h } from 'preact'

import UserActivity from './user-activity'

import style from './styles.scss'

export default function ContentColumn () {
  return (
    <div class={style.contentColumn}>
      <UserActivity />
    </div>
  )
}
