import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filterReducer from './filter'

const rootReducer = combineReducers({filter: filterReducer})

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  })
}
