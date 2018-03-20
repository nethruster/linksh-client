import { h } from 'preact'

import TableItem from './table-item'

import style from './styles.scss'

export default function Table () {
  return (
    <div>
      <div>
        <ul class={style.tableHeaderList}>
          <li class={style.hideSmall}>IP</li>
          <li>Last used</li>
          <li />
        </ul>
      </div>
      <ul>
        <TableItem
          ip='33.25.365.20'
          date='current'
        />
        <TableItem
          ip='50.245.69.50'
          date='00:42'
        />
        <TableItem
          ip='50.245.69.50'
          date='06.03.18'
        />
      </ul>
    </div>
  )
}
