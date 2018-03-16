import { h } from 'preact'

import LightHeader from '../../../../shared/light-header'
import EditAccountForm from './edit-account-form'

export default function AccountDetails () {
  return (
    <div>
      <LightHeader darker title='account details' />
      <EditAccountForm />
    </div>
  )
}
