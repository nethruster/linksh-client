import createStore from 'unistore'
import devtools from 'unistore/devtools'

import initialStore from './initial-store.js'

/**
 * Reference store schema:
 *   appIsFetching: Boolean
 *   activeSection: String
 */

let store = null

if (module.hot || process.env.NODE_ENV !== 'production') {
  store = devtools(createStore(initialStore))
} else {
  store = createStore(initialStore)
}

let actions = store => ({ // eslint-disable-line no-unused-vars
  switchCurrentSection (state, event) {
    return { activeSection: event.currentTarget.dataset.sectiontrigger }
  }
})

export {
  store,
  actions
}
