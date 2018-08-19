import { h } from 'preact'

import Input from '../shared/forms'
import Button from '../shared/button'

import styles from './styles.scss'

export default function Login() {
  return (
    <div class={`flex flex-dc ${styles.loginWrapper}`}>
      <div class={styles.authCard}>
        {/* Logo */}
        <h4 class="text-center">Sign in</h4>
        <Input type="text" title="Username" id="login-uname" />
        <Input type="password" title="Password" id="login-password" />
        <div class={`flex flex-sb ${styles.loginCardActions}`}>
          <Button text="Create account" noBorder />

          <Button text="Sign in" alternative />
        </div>
      </div>
      <footer class={`flex flex-sa flex-cross-center ${styles.authFooter}`}>
        <a href="https://github.com/nethruster/linksh">Linksh v0.1.0</a>
        <a href="https://nethruster.com/contact">Contact Nehtruster</a>
      </footer>
    </div>
  )
}
