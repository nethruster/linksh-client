import { h } from 'preact'

import LightHeader from '../../../shared/light-header'
import IconButton from '../../../shared/icon-button'

import sprites from 'icons'
import style from './styles.scss'

export default function FooterInfo() {
  return (
    <div class={style.footerInfoWrapper}>
      <LightHeader title="about" sidebarHeader />
      <div>
        <p>
          A fast and light open source URL shortener built for the modern web.
        </p>
        <p>
          With&nbsp;
          <svg class={style.heartIcon} viewBox="0 0 24 24">
            {sprites.heart}
          </svg>
          &nbsp;by&nbsp;
          <a href="https://nethruster.com" target="_blank" rel="noopener">
            Nethruster
          </a>.
        </p>
      </div>
      <div class={`flex flex-cross-center ${style.footerLinks}`}>
        <a href="https://twitter.com/nethruster" target="_blank" rel="noopener">
          <IconButton icon="twitter" />
        </a>
        <a href="https://github.com/nethruster" target="_blank" rel="noopener">
          <IconButton icon="github" />
        </a>
        {/* <a href='https://nethruster.com' target='_blank' rel='noopener'><IconButton icon='web' /></a> */}
      </div>
    </div>
  )
}
