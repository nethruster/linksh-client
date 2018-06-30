import { h } from 'preact'

export default function Typhography() {
  return (
    <div>
      <h3>Typography</h3>

      <div>
        <h1>Heading</h1>
        <h2>Heading</h2>
        <h3>Heading</h3>
        <h4>Heading</h4>
        <h5>Heading</h5>
        <h6>Heading</h6>
      </div>

      <div class={`flex flex-dc`}>
        <a>Anchor</a>
        <em>Emphasis</em>
        <small>Small</small>
        <strong>Strong</strong>
        <u>Underline</u>
      </div>
    </div>
  )
}
