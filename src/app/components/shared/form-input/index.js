import { h } from 'preact'

import LightHeader from '../light-header'

import style from './styles.scss'

export default function FormInput({
  type,
  placeholder,
  value,
  autocomplete,
  onInput,
  tabindex = 0
}) {
  let inputId = placeholder.trim().toLowerCase()
  if (type === 'checkbox') {
    return (
      <label
        for={inputId}
        class={`flex flex-full-center ${style.checkboxInputWrapper}`}
      >
        <input
          id={inputId}
          type="checkbox"
          class={`${style.checkboxInput}`}
          onChange={onInput}
        />
        <div class={style.checkbox}>
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z" />
            <polyline points="4 11 8 15 16 6" />
          </svg>
        </div>
        <LightHeader darker title={placeholder} />
      </label>
    )
  } else {
    return (
      <label for={inputId} class={style.inputLabel}>
        <LightHeader darker title={placeholder} />
        <input
          id={inputId}
          class={style.input}
          type={type}
          autocomplete={autocomplete}
          spellcheck="false"
          tabindex={tabindex}
          aria-label={placeholder}
          autocapitalize="off"
          autocorrect="off"
          onInput={onInput}
        />
      </label>
    )
  }
}
