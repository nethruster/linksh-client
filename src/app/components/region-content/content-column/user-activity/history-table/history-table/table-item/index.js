import { h } from 'preact'

import style from './styles.scss'

export default function TableItem ({oUrl, sUrl, date, hits}) {
  return (
    <li class={style.tableItemWrapper}>
      <ul class={style.tableItem}>
        <li>
          <a href={oUrl} target='_blank' rel='noopener'>
            <p>{oUrl}</p>
          </a>
        </li>
        <li>
          <p>{date}</p>
        </li>
        <li>
          <a href={sUrl} target='_blank' rel='noopener'>
            <p>{sUrl}</p>
          </a>
        </li>
        <li>
          <p>{hits}</p>
        </li>
      </ul>
    </li>
  )
}
