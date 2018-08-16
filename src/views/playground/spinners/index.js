import { h } from 'preact'

import Button from '../../shared/button'
import Spinner from '../../shared/spinner'

export default function Spinners() {
  return (
    <div>
      <h3>Spinner</h3>

      <div class="flex" style="margin-bottom: 8px;">
        <Button text="Button loading" spinner />
        <Spinner size={40} />
        <Spinner size={24} color="red" />
      </div>
    </div>
  )
}
