
//action types
const ONFIELD_CHANGE = 'ONFIELD_CHANGE'
const SEARCH_INIT = 'SEARCH_INIT'
const SEARCH_DONE = 'SEARCH_DONE'
const SEARCH_ERROR = 'SEARCH_ERROR'
const RESET = 'RESET'

//actions
export const searchInit = () => ({ type: SEARCH_INIT })
export const searchDone = res => ({ type: SEARCH_DONE, res })
export const searchError = error => ({ type: SEARCH_ERROR, error: error })
export const onFieldChange = query => ({ type: ONFIELD_CHANGE, query })
export const reset = () => ({ type: RESET })

//initial state
const initialState = {
  query: '',
  isFetching: false,
  items: [],
  error: null
}

//reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ONFIELD_CHANGE: return { ...state, query: action.query }
    case SEARCH_INIT: return { ...state, isFetching: true, error: null }
    case SEARCH_DONE: return { ...state, items: action.res, isFetching: false }
    case SEARCH_ERROR: return { ...state, error: action.error, isFetching: false }
    case RESET: return initialState
    default: return state
  }
}

//selectors:
export const selectRepos = state => state.gitHub.items
export const selectIsLoading = state => state.gitHub.isFetching
export const selectError = state => state.gitHub.error
export const selectFieldValue = state => state.gitHub.query
