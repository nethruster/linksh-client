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
