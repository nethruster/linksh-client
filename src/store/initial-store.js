/**
 * initial-store contains the default values of the store when the app is initialized.
 *
 * Schema
 * - appIsFetching: Any part of the app is fetching something or busy. Defaults to false. {Boolean}
 * - activeSection: App section selected by the user (from the sidebar menu). Defaults to 'activity'. {String}
 */

const initialStore = {
  appIsFetching: false,
  activeSection: 'uActivity'
}

export default initialStore
