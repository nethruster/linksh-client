import { h } from 'preact'

export default function Spinner({ size = '12', color }) {
  return (
    <div class="spinner" style={{ width: size }}>
      <svg class="circular" viewBox="25 25 50 50">
        <circle
          style={{ stroke: color }}
          class="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  )
}
