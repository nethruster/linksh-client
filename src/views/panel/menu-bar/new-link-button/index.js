import { h, Component } from 'preact'
import Ink from 'react-ink'
import { connect } from 'unistore/preact'
import { bind } from 'decko'

import Icon from '../../../shared/icon'
import VMenu from '../../../shared/v-menu'
import Input from '../../../shared/forms'
import Button from '../../../shared/button'

import { actions } from 'store'

import styles from './styles.scss'

export default connect(
  'vmenu',
  actions
)(
  class NewLinkButton extends Component {
    constructor(props) {
      super(props)

      this.menuId = 'newLink'
    }

    @bind
    toggleMenuHandler() {
      this.props.toggleMenu(this.menuId)
    }

    render() {
      return (
        <div
          class={`flex flex-full-center ${styles.newLinkButtonWrapper}`}
          onclick={this.toggleMenuHandler}
        >
          <Icon name="add" color="#fff" marginRight size="24" />
          <span>Create a new link</span>
          <Ink />
          <VMenu id={this.menuId} title="Add new link">
            <div>
              <Input
                type="url"
                title="Url"
                id="link-url"
                onInputHandler={this.handleLinkUrlChange}
              />
              <Input
                type="text"
                title="Custom title"
                id="link-title"
                onInputHandler={this.handleLinkTitleChange}
              />
            </div>
            <div class={`flex ${styles.submitFormButton}`}>
              <Button
                type="submit"
                text="Create"
                alternative
                // onClickExecute={this.sumbitLoginForm}
              />
            </div>
          </VMenu>
        </div>
      )
    }
  }
)
