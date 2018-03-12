import { h } from 'preact'

import ContentHeader from '../../../shared/content-header'
import NewLinkForm from './new-link-form'
import History from './history'

export default function UserActivity () {
  return (
    <div>
      <ContentHeader title='Activity' />
      <NewLinkForm />
      <History />
    </div>
  )
}
