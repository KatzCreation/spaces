import { combineReducers } from 'redux'
import { Counter, counter } from './counter/reducers'

export type GlobalState = {
    counter: Counter,
}

export const reducers = combineReducers<GlobalState>({
    counter
  })