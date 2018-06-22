import { h } from 'preact'

import ContentHeader from '../../../shared/content-header'
import AccountDetails from './account-details'
import SessionsTable from './sessions-table'

export default function UserSettings() {
  return (
    <div>
      <ContentHeader title="my account" />
      <AccountDetails />
      <SessionsTable />
    </div>
  )
}
