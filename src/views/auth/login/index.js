import { h, Component } from 'preact'
import { bind } from 'decko'
import { Link } from 'react-router-dom'
import { connect } from 'unistore/preact'

import Input from '../../shared/forms'
import Button from '../../shared/button'
import AuthFooter from '../auth-footer'

import { userLogin } from 'scripts/api-interface'
import { actions } from 'store'

import styles from './styles.scss'

export default connect(
  'auth',
  actions
)(
  class Login extends Component {
    constructor(props) {
      super(props)

      this.state = {
        email: '',
        password: ''
      }
    }

    @bind
    sumbitLoginForm(event) {
      event.preventDefault()

      // TODO: validate inputs

      userLogin({
        email: this.state.email,
        password: this.state.password
      }).then(response => {
        if (response.error) {
          console.error(response.error)
          // TODO: show error
        } else if (response.userId) {
          sessionStorage.setItem('lsh-usersession', JSON.stringify(response))
          this.props.toggleAuthState()
          this.context.router.history.push('/panel')
        }
      })
    }

    @bind
    handleEmailChange(event) {
      this.setState({
        email: event.target.value
      })
    }

    @bind
    handlePasswordChange(event) {
      this.setState({
        password: event.target.value
      })
    }

    render() {
      return (
        <div class={`flex flex-dc ${styles.wrapper}`}>
          <div class={styles.authCard}>
            {/* Logo */}
            <h4 class="text-center">Sign in</h4>
            <form onSubmit={this.sumbitLoginForm}>
              <Input
                type="email"
                title="Email"
                id="login-email"
                onInputHandler={this.handleEmailChange}
                autocomplete="email"
              />
              <Input
                type="password"
                title="Password"
                id="login-password"
                onInputHandler={this.handlePasswordChange}
                autocomplete="current-password"
              />
              <div class={`flex flex-sb ${styles.authCardActions}`}>
                <Button
                  type="submit"
                  text="Sign in"
                  alternative
                  onClickExecute={this.sumbitLoginForm}
                />
                <Link to="register">
                  <Button
                    text="Create account"
                    noBorder
                    customClass={styles.secondaryButton}
                  />
                </Link>
              </div>
            </form>
          </div>
          <AuthFooter />
        </div>
      )
    }
  }
)
