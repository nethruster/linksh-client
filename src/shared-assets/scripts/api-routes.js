import { API_ENDPOINT } from 'scripts/vars'

export const ROUTE_API_TEST = `${API_ENDPOINT}/online`

// Auth routes
const AUTH_SUB = 'auth'
export const ROUTE_LOGIN = `${API_ENDPOINT}/${AUTH_SUB}/login`
export const ROUTE_REGISTER = `${API_ENDPOINT}/${AUTH_SUB}/register`
export const ROUTE_LOGOUT = `${API_ENDPOINT}/${AUTH_SUB}/logout`
