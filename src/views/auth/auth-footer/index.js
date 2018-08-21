import { h } from 'preact'

import styles from './styles.scss'

export default function AuthFooter() {
  return (
    <footer class={`flex flex-sa flex-cross-center ${styles.authFooter}`}>
      <a href="https://github.com/nethruster/linksh">Linksh v0.1.0</a>
      <a href="https://nethruster.com/contact">Contact Nehtruster</a>
    </footer>
  )
}
