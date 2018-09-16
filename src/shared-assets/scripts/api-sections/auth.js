import { baseRequestParams } from 'scripts/utils'

import { ROUTE_LOGIN, ROUTE_REGISTER } from 'scripts/api-routes'

export async function loginUser(credentials) {
  let response = await fetch(
    ROUTE_LOGIN,
    baseRequestParams('POST', {
      ...credentials,
      useCookie: true
    })
  )

  return response.json()
}

export async function registerUser(registerData) {
  let response = await fetch(
    ROUTE_REGISTER,
    baseRequestParams('POST', {
      ...registerData,
      useCookie: true
    })
  )

  return response.json()
}

export async function logoutUser() {
  return true
}
