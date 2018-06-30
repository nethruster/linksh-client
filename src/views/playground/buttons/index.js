import { h } from 'preact'

import Button from '../../shared/button'

export default function Buttons() {
  return (
    <div>
      <h3>Buttons</h3>

      <div class="flex flex-dc" style="align-items: flex-start">
        <Button text="Button" />
        <Button text="Button" href="https://nethruster.com" hrefBlank />
        <Button text="Button" icon="google" />
        <Button text="Button" icon="google" iconButton />
      </div>
    </div>
  )
}
