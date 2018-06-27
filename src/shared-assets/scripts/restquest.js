let API_ENDPOINT = ''

function _checkAPIEndpoint() {
  if (!API_ENDPOINT) {
    API_ENDPOINT = localStorage.getItem('lsh-config').serverEndpoint
  } else {
    return
  }
}

export default function restquest(
  method = 'GET',
  requestZone,
  zoneId = '',
  reqParams = {}
) {
  _checkAPIEndpoint()

  let requestObj = {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqParams)
  }

  return fetch(`${serverEndpoint}/api/${requestZone}/${zoneId}`, requestObj)
    .then(response => {
      // if (!response.ok) {

      // }
      return response.json()
    })
    .then(result => result)
}
