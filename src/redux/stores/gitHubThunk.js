import { searchInit, searchDone, searchError } from './gitHub'
import { searchGitHubRepos } from '../../utils/api'

// redux thunk

export const getRepos = query => async dispatch => {
  try {
    dispatch(searchInit())
    const res = await searchGitHubRepos(query)
    dispatch(searchDone(res))
  } catch (error) {
    dispatch(searchError(error))
  }
}
