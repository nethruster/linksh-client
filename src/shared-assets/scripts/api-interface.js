import { ROUTE_API_TEST, ROUTE_LOGIN, ROUTE_REGISTER } from 'scripts/api-routes'

const baseRequestParams = (method, requestBody) => {
  return {
    method,
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  }
}

export async function testAPIConnection() {
  await fetch(ROUTE_API_TEST, baseRequestParams('GET')).catch(error => {
    console.warn(`Could not connect to API: %c${error}`, 'color: red')
    return
  })

  console.log('Found API endpoint online sucessfully')
}

export async function userLogin(credentials) {
  let response = await fetch(
    ROUTE_LOGIN,
    baseRequestParams('POST', {
      ...credentials,
      useCookie: true
    })
  )

  return response.json()
}

export async function userRegister(registerData) {
  let response = await fetch(
    ROUTE_REGISTER,
    baseRequestParams('POST', {
      ...registerData,
      useCookie: true
    })
  )

  return response
}

export async function userLogout() {
  return true
}
