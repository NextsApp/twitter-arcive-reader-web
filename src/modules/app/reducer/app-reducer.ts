import { APP_STORE_APP_STATE, APP_STORE_ARCHIVE } from '../'

export interface InterfaceAppState {
  state: string
  archive: any
}

export function reducer(
  state: InterfaceAppState = {
    state: 'unknown',
    archive: null,
  },
  action: any,
) {
  switch (action.type) {
    case APP_STORE_APP_STATE:
      return Object.assign({}, state, { state: action.state })
    case APP_STORE_ARCHIVE:
      return Object.assign({}, state, { archive: action.archive })

    default:
      return state
  }
}
