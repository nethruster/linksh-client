import { h } from 'preact'

import LightHeader from '../../../../shared/light-header'
import HistoryTable from './history-table'

import style from './styles.scss'

export default function History () {
  return (
    <div class={style.history}>
      <LightHeader darker title='history' />
      <HistoryTable />
    </div>
  )
}
