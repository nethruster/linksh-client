import { h } from 'preact'

export default function Checkbox({ title, id, handleToggle }) {
  return (
    <label for={id} class="flex">
      <span>{title}</span>
      <input type="checkbox" id={id} onChange={handleToggle} />
    </label>
  )
}
