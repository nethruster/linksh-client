import { h } from 'preact'

export default function Select({ title, id, options, handleToggle }) {
  return (
    <label for={id} class="flex flex-dc">
      <span>{title}</span>
      <select id={id}>
        {options.map(option => {
          return (
            <option onChange={handleToggle} value={option.value}>
              {option.name}
            </option>
          )
        })}
      </select>
    </label>
  )
}
