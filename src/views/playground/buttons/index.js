import { h } from 'preact'

import Button from '../../shared/button'

export default function Buttons() {
  return (
    <div>
      <h3>Buttons</h3>

      <div class="flex" style="align-items: flex-start;margin-bottom: 8px;">
        <Button text="Button" />
        <Button text="Button" href="https://nethruster.com" hrefBlank />
        <Button text="Button" icon="eye" />
        <Button text="Button" icon="eye" iconButton />
      </div>

      <div class="flex" style="align-items: flex-start">
        <Button text="Button" alternative />
        <Button
          text="Button"
          href="https://nethruster.com"
          hrefBlank
          alternative
        />
        <Button text="Button" icon="eye" alternative />
        <Button text="Button" icon="eye" iconButton alternative />
      </div>
    </div>
  )
}
