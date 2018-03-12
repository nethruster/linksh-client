import { h } from 'preact'

import ContentColumn from './content-column'

import style from './styles.scss'

export default function RegionContent () {
  return (
    <div class={`flex ${style.content}`}>
      <ContentColumn />
    </div>
  )
}
