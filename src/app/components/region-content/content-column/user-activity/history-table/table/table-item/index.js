import { h } from 'preact'

import style from './styles.scss'

export default function TableItem ({ oUrl, sUrl, date, hits }) {
  return (
    <li>
      <ul class={style.tableItem}>
        <li class='flex flex-cross-center'>
          <a href={oUrl} target='_blank' rel='noopener'>
            <p>{oUrl}</p>
          </a>
        </li>
        <li class='flex flex-cross-center'>
          <p>{date}</p>
        </li>
        <li class='flex flex-cross-center'>
          <a href={sUrl} target='_blank' rel='noopener'>
            <p>{sUrl}</p>
          </a>
        </li>
        <li class='flex flex-cross-center'>
          <p>{hits}</p>
        </li>
      </ul>
    </li>
  )
}
