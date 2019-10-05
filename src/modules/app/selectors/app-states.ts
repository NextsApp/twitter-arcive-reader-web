import { createSelector } from 'reselect'

export const selectAppState = createSelector(
  [(state: any) => state.app],
  appState => {
    return appState.state
  },
)
