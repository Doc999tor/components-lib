import ReactDOM from 'react-dom'
import React from 'react'
import './main.styl'
import {Provider} from 'react-redux'
import {Router, Route, Redirect, browserHistory} from 'react-router'
import {createStore, combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import * as allReducers from './reducers/all-reducers.js'
const config = window._config

const reducers = combineReducers({
  ...allReducers,
  routing: routerReducer
})
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function onAppInit(browserHistory) {
    return (nextState) => {
        let searchObj = Object.keys(nextState.location.query)
        let searchItemIndex = config.routing.findIndex((item) => {
            return searchObj.every((query) => {
                return item.urlQuery.indexOf(query) != -1
            })
        })
        if (searchItemIndex != -1 && nextState.location.pathname != config.routing[searchItemIndex].path) {
            browserHistory.replace({pathname: config.routing[searchItemIndex].path, search: nextState.location.search})
        }
    };
}
function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route onEnter={onAppInit(browserHistory)}>
            {config.routing.map((page, index) => {return <Route path={page.path} getComponent={(location, cb) => System.import('./pages' + page.path + page.path + '.jsx').then(loadRoute(cb)).catch(errorLoading) } key={`page_index_${index}`}/>} )}
        </Route>
        <Route path='*' getComponent={(location, cb) => System.import('./pages/error404/error404.jsx').then(loadRoute(cb)).catch(errorLoading) }/>
        <Redirect from='/' to={config.routing[0].path}/>
    </Router>
  </Provider>, document.getElementById('root'))
