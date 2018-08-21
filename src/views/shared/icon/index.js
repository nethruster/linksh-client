import { h } from 'preact'

import icons from './icons'

export default function Icon({ name, size = '20', marginRight, color }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      class={marginRight ? 'marginRight' : ''}
      style={`min-width: ${size}; min-height: ${size}`}
    >
      <path d={icons[name]} fill={color} />
    </svg>
  )
}
