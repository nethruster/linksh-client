import { h } from 'preact'

import TableItem from './table-item'

import style from './styles.scss'

export default function HistoryTable () {
  return (
    <div class={style.table}>
      <div class={style.tableHeader}>
        <ul class={style.tableHeaderList}>
          <li>Original URL</li>
          <li>Created</li>
          <li>Short URL</li>
          <li>Hits</li>
        </ul>
      </div>
      <ul>
        <TableItem
          oUrl='https://gariasf.com'
          sUrl='https://nth.sh/me'
          date='5 seconds ago'
          hits='10' />
        <TableItem
          oUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          sUrl='https://nth.sh/hyt83j'
          date='1 hour ago'
          hits='80' />
        <TableItem
          oUrl='https://twitter.com/5H4H4N/status/971909198283001856'
          sUrl='https://nth.sh/58gju8'
          date='8 hours ago'
          hits='5' />
        <TableItem
          oUrl='https://github.com/nethruster/linksh'
          sUrl='https://nth.sh/linksh'
          date='Yesterday'
          hits='1528' />
        <TableItem
          oUrl='https://i.imgur.com/8cw104e.gifv'
          sUrl='https://nth.sh/dhu74h'
          date='10 days ago'
          hits='569' />
      </ul>
    </div>
  )
}
