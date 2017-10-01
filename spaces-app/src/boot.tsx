import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as redux from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as state from './state'

import { CounterView } from './counter/counter-view'
import { HomeView } from './home/home-view'
import { MapView } from './map/map-view'
import { VisualsView } from './visuals/visuals-view'

const store: redux.Store<state.GlobalState> = redux.createStore(
  state.reducers,
  {} as state.GlobalState,
  redux.applyMiddleware(thunk),
)

const Root: React.SFC<{}> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeView}/>
        <Route path='/map' component={MapView}/>
        <Route path='/visuals' component={VisualsView}/>
        <Route path='/counter' component={CounterView}/>
      </Switch>
    </BrowserRouter>
  </Provider>
)

window.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('redux-app-root')
  ReactDOM.render(<Root />, rootEl)
})

const throttle = function(type: string, name: string) {
    const obj = window;
    let running = false;
    const func = function() {
        if (running) { return; }
        running = true;
            requestAnimationFrame(function() {
            obj.dispatchEvent(new CustomEvent(name));
            running = false;
        });
    };
    obj.addEventListener(type, func);
};

/* init - you can init any event */
throttle("resize", "optimizedResize");
