import { API_ENDPOINT } from 'scripts/vars'

export const ROUTE_API_TEST = `${API_ENDPOINT}/online`

// Auth routes
const _AUTH_SUB = 'auth'
export const ROUTE_LOGIN = `${API_ENDPOINT}/${_AUTH_SUB}/login`
export const ROUTE_REGISTER = `${API_ENDPOINT}/${_AUTH_SUB}/register`
export const ROUTE_LOGOUT = `${API_ENDPOINT}/${_AUTH_SUB}/logout`

const _LINK_SUB = 'link'
export const ROUTE_LINK_CANONICAL = `${API_ENDPOINT}/${_LINK_SUB}`
