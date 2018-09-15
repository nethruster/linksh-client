export function checkSessionIntegrity() {
  let existingSession = sessionStorage.getItem('lsh-usersession')

  if (!existingSession) {
    return false
  }

  let sessionExpirationDate = JSON.parse(existingSession).expiresAt

  let formatedDate = sessionExpirationDate.slice(
    0,
    sessionExpirationDate.indexOf('CEST') - 1
  )

  return new Date(formatedDate).getTime() > Date.now()
}

export function baseRequestParams(method, requestBody) {
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
