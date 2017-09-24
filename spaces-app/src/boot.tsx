import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as redux from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as state from './state'

import { CounterView } from './counter/counter-view'

const store: redux.Store<state.GlobalState> = redux.createStore(
  state.reducers,
  {} as state.GlobalState,
  redux.applyMiddleware(thunk),
)

const Root: React.SFC<{}> = () => (
  <Provider store={store}>
    <CounterView />
  </Provider>
)

window.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('redux-app-root')
  ReactDOM.render(<Root />, rootEl)
})
