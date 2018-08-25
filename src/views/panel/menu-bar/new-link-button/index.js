import { h } from 'preact'
import Ink from 'react-ink'

import Icon from '../../../shared/icon'

import styles from './styles.scss'

export default function NewLinkButton() {
  return (
    <div class={`flex flex-full-center ${styles.newLinkButtonWrapper}`}>
      <Icon name="add" color="#fff" marginRight size="24" />
      <span>Add a new link</span>
      <Ink />
    </div>
  )
}
