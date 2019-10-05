import { APP_STORE_APP_STATE, APP_STORE_ARCHIVE } from '../'

export const storeAppState = function(state: string) {
  return {
    type: APP_STORE_APP_STATE,
    state,
  }
}

export const storeArchiveData = function(archive: any) {
  return {
    type: APP_STORE_ARCHIVE,
    archive,
  }
}
