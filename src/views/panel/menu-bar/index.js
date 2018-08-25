import { h } from 'preact'
import { connect } from 'unistore/preact'

import NewLinkButton from './new-link-button'
import Button from '../../shared/button'
import VMenu from '../../shared/v-menu'

import { actions } from 'store'

import styles from './styles.scss'

export default connect(
  'vmenu',
  actions
)(function MenuBar() {
  return (
    <div class={`flex flex-full-center ${styles.menubarWrapper}`}>
      <NewLinkButton />
      <Button
        iconButton
        icon="dots-menu"
        noBorder
        iconSize="24"
        customClass={`flex flex-full-center ${styles.menuButton}`}
        onClickExecute={this.props.toggleMenu}
      />
      <VMenu>
        <p>Menu item</p>
      </VMenu>
    </div>
  )
})
