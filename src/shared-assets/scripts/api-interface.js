import { loginUser, registerUser, logoutUser } from './api-endpoints/auth'

import { ROUTE_API_TEST } from 'scripts/api-routes'

export async function testAPIConnection() {
  await fetch(ROUTE_API_TEST, baseRequestParams('GET')).catch(error => {
    console.warn(`Could not connect to API: %c${error}`, 'color: red')
    return
  })

  console.log('Found API endpoint online sucessfully')
}

export { loginUser, registerUser, logoutUser }
