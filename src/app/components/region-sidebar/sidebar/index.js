import { h } from 'preact'

import SidebarMenu from './sidebar-menu'
import FooterInfo from './footer-info'
import Separator from '../../shared/separator'

import style from './styles.scss'

export default function Sidebar () {
  return (
    <div class={style.sidebar}>
      <SidebarMenu />
      <Separator />
      <FooterInfo />
    </div>
  )
}
