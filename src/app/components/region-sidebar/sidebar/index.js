import { h } from 'preact'
import { connect } from 'unistore/preact'

import { actions } from 'store'

import SidebarMenu from './sidebar-menu'
import FooterInfo from './footer-info'
import Separator from '../../shared/separator'

import style from './styles.scss'

export default connect(
  'mobileSidebarState',
  actions
)(({ mobileSidebarState }) => {
  return (
    <div
      class={`${style.sidebar} ${mobileSidebarState ? style.mobileActive : ''}`}
    >
      <SidebarMenu />
      <Separator />
      <FooterInfo />
    </div>
  )
})
