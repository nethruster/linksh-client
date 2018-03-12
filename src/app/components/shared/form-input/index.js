import { h } from 'preact'

export default function FormInput ({type, placeholder}) {
  return (
    <input type={type} placeholder={placeholder} />
  )
}
