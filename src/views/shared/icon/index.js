import { h } from 'preact'

import icons from './icons'

export default function Icon({ name, size = '12', marginRight, color }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      class={marginRight ? 'marginRight' : ''}
      style={`min-width: ${size}; min-height: ${size}`}
    >
      <path d={icons[name]} fill={color} />
    </svg>
  )
}
