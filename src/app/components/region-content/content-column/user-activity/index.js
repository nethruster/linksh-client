import { h } from 'preact'

import ContentHeader from '../../../shared/content-header'
import NewLinkForm from './new-link-form'
import HistoryTable from './history-table'

export default function UserActivity () {
  return (
    <div>
      <ContentHeader title='Activity' />
      <NewLinkForm />
      <HistoryTable />
    </div>
  )
}
