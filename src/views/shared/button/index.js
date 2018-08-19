import { h } from 'preact'
import Ink from 'react-ink'

import Icon from '../icon'
import Spinner from '../spinner'

export default function Button({
  text,
  href,
  hrefBlank,
  type = 'default',
  icon,
  iconButton,
  onClickExecute,
  alternative,
  spinner,
  noBorder
}) {
  if (iconButton) {
    return (
      <button
        aria-label={text}
        type={type}
        class="icon-button"
        altButton={alternative}
        onClick={onClickExecute}
        noBorder={noBorder}
      >
        <a
          href={href}
          target={hrefBlank ? '_blank' : ''}
          rel="noopener"
          class="flex flex-full-center"
        >
          {icon && <Icon name={icon} />}
          <Ink />
        </a>
      </button>
    )
  } else if (href) {
    return (
      <button
        aria-label={text}
        type={type}
        onClick={onClickExecute}
        altButton={alternative}
        noBorder={noBorder}
      >
        <a
          href={href}
          target={hrefBlank ? '_blank' : ''}
          rel="noopener"
          class="flex flex-full-center"
        >
          {icon && <Icon name={icon} marginRight />}
          <span>{spinner ? <Spinner /> : text}</span>
          {!spinner && <Ink />}
        </a>
      </button>
    )
  }

  return (
    <button
      aria-label={text}
      type={type}
      class="flex flex-full-center"
      onClick={onClickExecute}
      altButton={alternative}
      noBorder={noBorder}
    >
      {icon && <Icon name={icon} marginRight />}
      <span>{spinner ? <Spinner /> : text}</span>
      {!spinner && <Ink />}
    </button>
  )
}
