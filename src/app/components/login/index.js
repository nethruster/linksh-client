import { h, Component } from 'preact'
import { bind } from 'decko'
import Ink from 'react-ink'

import FormInput from '../shared/form-input'
import restquest from 'restquest'

import style from './styles.scss'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      keepSession: false
    }
  }

  @bind
  sendLoginRequest(event) {
    event.preventDefault()
    event.stopPropagation()

    // restquest('POST', 'auth', 'login', {
    //   email: this.state.email,
    //   password: this.state.password,
    //   useCookie: true,
    //   noExpire: this.state.keepSession
    // }).then(result => {
    //   localStorage.setItem('loginData', result)
    // })
  }

  @bind
  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  @bind
  handlePasswordlChange(event) {
    this.setState({ password: event.target.value })
  }

  @bind
  toggleKeepSession() {
    this.setState({ keepSession: !this.state.keepSession })
  }

  render() {
    return (
      <div class={`flex flex-full-center ${style.loginWrapper}`}>
        <div class={`flex flex-dc ${style.loginForm}`}>
          <form
            class="flex flex-dc flex-cross-center"
            onSubmit={this.sendLoginRequest}
          >
            <FormInput
              type="email"
              placeholder="Email"
              autocomplete="current-email"
              onInput={this.handleEmailChange}
            />
            <FormInput
              type="password"
              placeholder="Password"
              autocomplete="current-password"
              onInput={this.handlePasswordlChange}
            />
            <button class={`flex flex-main-center`}>
              <Ink />
              <svg viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z"
                />
              </svg>
            </button>
            <div class={style.keepSessionWrapper}>
              <FormInput
                placeholder="Remember me"
                type="checkbox"
                onInput={this.toggleKeepSession}
              />
            </div>
            <div class={style.registerLinkWrapper}>
              <p class={style.lightTitle}>Not registered?</p>
              <a class={style.registerLink}>Create an account</a>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
