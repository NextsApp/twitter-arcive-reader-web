import { APP_STORE_APP_INFO } from '../'


export function reducer(
  state = {
    state: 'loading',
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
