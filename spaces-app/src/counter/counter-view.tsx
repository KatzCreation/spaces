import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'

import {
  incrementCounter
} from './actions'

import * as state from '../state'

type OwnProps = {
}

type ConnectedState = {
  counter: { value: number }
}

type ConnectedDispatch = {
  increment: (n: number) => void
}

const mapStateToProps = (state: state.GlobalState, ownProps: OwnProps): ConnectedState => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch: redux.Dispatch<state.GlobalState>): ConnectedDispatch => ({
  increment: (n: number) =>
    dispatch(incrementCounter(n))
})

class PureCounterView extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, {}> {

  render () {
    const { counter } = this.props
    return <div>
      <div className='hero'>
        <strong>{counter.value}</strong>
      </div>
      <button ref='increment' onClick={() => this.props.increment(1)}>click me!</button>
    </div>
  }
}


export const CounterView = connect(mapStateToProps, mapDispatchToProps)(PureCounterView)
