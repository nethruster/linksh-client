import { h } from 'preact'
import Ink from 'react-ink'

import Icon from '../icon'
import Spinner from '../spinner'

export default function Button({
  text,
  type = 'default',
  icon,
  iconButton,
  onClickExecute,
  alternative,
  spinner,
  customClass
}) {
  if (iconButton) {
    return (
      <button
        role="button"
        aria-label={text}
        type={type}
        class={`icon-button flex flex-full-center ${customClass}`}
        altButton={alternative}
        onClick={onClickExecute}
      >
        {icon && <Icon name={icon} />}
        <Ink />
      </button>
    )
  } else {
    return (
      <button
        aria-label={text}
        type={type}
        class={`flex flex-full-center ${customClass}`}
        onClick={onClickExecute}
        altButton={alternative}
      >
        {icon && <Icon name={icon} marginRight />}
        <span>{spinner ? <Spinner /> : text}</span>
        <Ink />
      </button>
    )
  }
}
