import { h, Component } from 'preact'

import LightHeader from '../../../../../shared/light-header'
import Separator from '../../../../../shared/separator'
import FormInput from '../../../../../shared/form-input'

import style from './styles.scss'

export default class EditAccountForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      newUsername: {
        value: '',
        state: 'default'
      },
      newEmail: {
        value: '',
        state: 'default'
      },
      userPassword: {
        value: '',
        state: 'default'
      },
      isFormActive: false
    }

    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm (event) {
    event.preventDefault()
    this.setState({isFormActive: !this.state.isFormActive})
  }

  render () {
    let state = this.state
    return (
      <form class={`flex flex-sb ${style.form}`}>
        <div class={`flex flex-dc flex-sb ${style.formInputs} ${state.isFormActive ? style.formInputsActive : ''}`}>
          <div class={style.formInput}>
            <LightHeader darker={state.isFormActive} title='username' />
            {
              state.isFormActive
                ? <FormInput type='text' value='gariasf' autocomplete='username' />
                : <p>gariasf</p>
            }
            
          </div>
          <div class={style.formInput}>
            <LightHeader darker={state.isFormActive} title='email' />
            {
              state.isFormActive
                ? <FormInput type='email' value='noreply@gariasf.com' autocomplete='email' />
                : <p>noreply@gariasf.com</p>
            }
          </div>
          {
            state.isFormActive &&
            <div class={style.formInput}>
              <LightHeader darker title='Current password' />
              <FormInput type='password' autocomplete='password' />
            </div>
          }
          {state.isFormActive &&
          <div>
            <Separator />
            <div class={`flex flex-sb`}>
              <button class={style.warningButton}>Delete account</button>
              <div>
                <button class={style.cancelButton} onClick={this.toggleForm}>Cancel</button>
                <button class={style.saveButton}>Save</button>
              </div>
            </div>
          </div>
          }
        </div>
        {!state.isFormActive && <button onClick={this.toggleForm}>Edit</button>}
      </form>
    )
  }
}
