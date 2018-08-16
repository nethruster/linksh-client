import createStore from 'unistore'
import devtools from 'unistore/devtools'

import initialStore from './initial-store.js'
import actions from './actions'

let store = null

if (module.hot || process.env.NODE_ENV !== 'production') {
  store = devtools(createStore(initialStore))
} else {
  store = createStore(initialStore)
}

export { store, actions }
