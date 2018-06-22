import { h } from 'preact'

import LightHeader from '../../../../shared/light-header'
import Table from './table'

import style from './styles.scss'

export default function SessionsTable() {
  return (
    <div class={style.sessions}>
      <LightHeader darker title="active sessions" />
      <Table />
    </div>
  )
}
