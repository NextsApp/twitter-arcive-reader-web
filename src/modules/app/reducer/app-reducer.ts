import { APP_STORE_APP_INFO } from '../'

export interface InterfaceAppState {
  state: string
}

export function reducer(
  state: InterfaceAppState = {
    state: 'unknown',
  },
  action: any,
) {
  switch (action.type) {
    case APP_STORE_APP_INFO:
      return Object.assign({}, state, { isLoading: action.payload })

    default:
      return state
  }
}
