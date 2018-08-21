import { h, Component } from 'preact'
import { bind } from 'decko'
import { Link } from 'react-router-dom'

import Input from '../../shared/forms'
import Button from '../../shared/button'
import AuthFooter from '../auth-footer'

import { userRegister } from 'scripts/api-interface'

import styles from './styles.scss'

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false
    }
  }

  @bind
  sumbitRegisterForm(event) {
    event.preventDefault()

    // TODO: validate inputs

    userRegister({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
  }

  @bind
  handleUnameChange(event) {
    this.setState({
      username: event.target.value
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

  @bind
  handleConfirmPasswordChange(event) {
    this.setState({
      confirmPassword: event.target.value
    })
  }

  @bind
  toggleShowPassword() {
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  render() {
    return (
      <div class={`flex flex-dc ${styles.wrapper}`}>
        <div class={styles.authCard}>
          {/* Logo */}
          <h4 class="text-center">Create your Linksh account</h4>
          <form onSubmit={this.sumbitRegisterForm}>
            <Input
              type="text"
              title="Username"
              id="register-uname"
              onInputHandler={this.handleUnameChange}
            />
            <Input
              type="email"
              title="Email"
              id="register-email"
              onInputHandler={this.handleEmailChange}
            />
            <div class="flex">
              <div class={styles.formInputsContainer}>
                <Input
                  type={this.state.showPassword ? 'text' : 'password'}
                  title="Password"
                  id="register-password"
                  onInputHandler={this.handlePasswordChange}
                />
                <Input
                  type={this.state.showPassword ? 'text' : 'password'}
                  title="Confirm password"
                  id="register-confirm-password"
                  onInputHandler={this.handleConfirmPasswordChange}
                />
              </div>
              <div class={styles.showPasswordContainer}>
                <Button
                  iconButton
                  icon={this.state.showPassword ? 'eye-off' : 'eye'}
                  noBorder
                  onClickExecute={this.toggleShowPassword}
                />
              </div>
            </div>
            <div class={`flex flex-sb ${styles.authCardActions}`}>
              <Button
                type="submit"
                text="Register"
                alternative
                onClickExecute={this.sumbitLoginForm}
              />

              <Link to="login">
                <Button
                  text="Sign in instead"
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
