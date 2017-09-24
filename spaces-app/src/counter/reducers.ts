import { Action } from './actions'

export type Counter = { value: number }

const initialState: Counter = {
  value: 0,
}

export const counter = (state: Counter = initialState, action: Action): Counter => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      const { delta } = action
      return { value: state.value + delta }

    case 'RESET_COUNTER':
      return { value: 0 }

    default:
      return state
  }
}
