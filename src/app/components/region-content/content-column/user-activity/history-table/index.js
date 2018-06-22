import { h } from 'preact'

import LightHeader from '../../../../shared/light-header'
import Table from './table'

import style from './styles.scss'

export default function History() {
  return (
    <div class={style.history}>
      <LightHeader darker title="history" />
      <Table />
    </div>
  )
}
