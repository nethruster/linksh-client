import { h } from 'preact'

import Button from '../../shared/button'

export default function Buttons() {
  return (
    <div>
      <h3>Buttons</h3>

      <div class="flex" style="align-items: flex-start;margin-bottom: 8px;">
        <Button text="Button" noBorder />
        <Button
          text="Button"
          href="https://nethruster.com"
          hrefBlank
          noBorder
        />
        <Button text="Button" icon="google" noBorder />
        <Button text="Button" icon="google" iconButton noBorder />
      </div>

      <div class="flex" style="align-items: flex-start;margin-bottom: 8px;">
        <Button text="Button" />
        <Button text="Button" href="https://nethruster.com" hrefBlank />
        <Button text="Button" icon="google" />
        <Button text="Button" icon="google" iconButton />
      </div>

      <div class="flex" style="align-items: flex-start">
        <Button text="Button" alternative />
        <Button
          text="Button"
          href="https://nethruster.com"
          hrefBlank
          alternative
        />
        <Button text="Button" icon="google" alternative />
        <Button text="Button" icon="google" iconButton alternative />
      </div>
    </div>
  )
}
