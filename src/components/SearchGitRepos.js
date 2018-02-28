import React from 'react'
import { PropTypes as T } from 'prop-types'

//components
import Async from '../utils/Async'

export const SearchGitRepos = ({ repos, isFetching, error, onFieldChange, getRepos, fieldValue, reset }) =>
  <div style={{ width: '50%' }}>
    <form
      onSubmit={e => {
        e.preventDefault();
        getRepos(fieldValue)
      }}>
      <label>
        Search GitHub
        <input
          type="text"
          required
          size="25"
          value={fieldValue}
          onChange={e => onFieldChange(e.target.value)} />
      </label>
      <button
        className="button"
        type="submit">find</button>
      {' '}
      <button
        type="button"
        onClick={reset}
        className="button">reset</button>
    </form>
    <Async hasError={error !== null} isLoaded={isFetching === false}>
      <ul>
        {repos.map(repo =>
          <li key={repo.id}>
            <a href={repo.git_url}>{repo.name}</a>
          </li>
        )}
      </ul>
    </Async>
  </div>


SearchGitRepos.propTypes = {
  getRepos: T.func.isRequired
}
