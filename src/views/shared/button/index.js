import { h } from 'preact'
import Ink from 'react-ink'

import Icon from '../icon'
import Spinner from '../spinner'

export default function Button({
  text,
  type = 'default',
  icon,
  iconColor,
  iconSize,
  iconButton,
  onClickExecute,
  alternative,
  spinner,
  noBorder,
  customClass
}) {
  if (iconButton) {
    return (
      <div
        role="button"
        aria-label={text}
        type={type}
        class={`icon-button flex flex-full-center ${customClass}`}
        altButton={alternative}
        onClick={onClickExecute}
        noBorder={noBorder}
      >
        {icon && <Icon name={icon} color={iconColor} size={iconSize} />}
        <Ink />
      </div>
    )
  } else {
    return (
      <button
        aria-label={text}
        type={type}
        class={`flex flex-full-center ${customClass}`}
        onClick={onClickExecute}
        altButton={alternative}
        noBorder={noBorder}
      >
        {icon && <Icon name={icon} marginRight />}
        <span>{spinner ? <Spinner /> : text}</span>
        <Ink />
      </button>
    )
  }
}
