import { combineReducers } from 'redux'

import gitHub from './stores/gitHub'

const rootReducer = combineReducers({
  gitHub,
})

export default rootReducer
