import { h } from 'preact'

import style from './styles.scss'

export default function FormInput ({type, placeholder, value, autocomplete}) {
  return (
    <input class={style.input}type={type} placeholder={placeholder} value={value} autocomplete={autocomplete} />
  )
}
