import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as appReducer } from '../modules/app'

const reducers = combineReducers({
  app: appReducer,
})

export default function configureStore(initialState: any = {}) {
  // Create the store with two middlewares
  const middleWares: any = [] //[thunk];
  const enhancers = compose(applyMiddleware(...middleWares))
  return createStore(reducers, { ...initialState }, composeWithDevTools(enhancers))
  //store.asyncReducers = {} // Async reducer registry
  // return store
}
