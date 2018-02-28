
//https://redux.js.org/docs/recipes/ReducingBoilerplate.html

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export {createReducer}


//Reducer
/*const handlers = {
  ONFIELD_CHANGE: (state, action) => ({ ...state, query: action.query }),
  SEARCH_INIT: (state, action) => ({ ...state, isFetching: true, error: null }),
  SEARCH_DONE: (state, action) => ({ ...state, items: action.res, isFetching: false }),
  SEARCH_ERROR: (state, action) => ({ ...state, error: action.error, isFetching: false }),
  RESET: (state, action) => initialState
}*/
//export default createReducer(initialState, handlers)
