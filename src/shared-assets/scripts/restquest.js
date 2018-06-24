import { serverEndpoint } from 'config'

export default function restquest(
  method = 'GET',
  requestZone,
  zoneId = '',
  reqParams = {}
) {
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
    .then(response => response.json())
    .then(result => result)
}
