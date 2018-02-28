import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './rootReducer'

//https://github.com/zalmoxisus/redux-devtools-extension

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
))

export default store
