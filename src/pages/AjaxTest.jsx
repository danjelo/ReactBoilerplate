import React, { Component } from 'react'

import { getQuote, getGitHubRepos } from '../utils/api'
import Async from '../utils/Async'

class AjaxTester extends Component {

  state = {
    loading: false,
    message: null,
    error: null,

    loadingRepos: false,
    repos: [],
    errorRepos: null,
  }

  componentDidMount() {
    console.log('componMOunt')
    this.fetchQuote()
    this.fetchRepos()
  }

  fetchRepos = async () => { // async / await
    this.setState({ loadingRepos: true })
    try {
      const res = await getGitHubRepos()
      this.setState({ loadingRepos: false, repos: res })
    } catch (error) {
      this.setState({ errorRepos: error, loadingRepos: false })
    }
  }

  fetchQuote = () => { // promise
    this.setState({ loading: true, message: null })
    getQuote()
      .then(text => this.setState({ message: text, loading: false }))
      .catch(error => this.setState({ error: error, loading: false }))
  }

  render() {
    const { message, loading, error, repos, loadingRepos, errorRepos } = this.state
    return (
      <div>
        {loading === true &&
          <p><b>loading...</b></p>}

        {message !== null &&
          <p>{message}</p>}

        {error !== null &&
          <p>FAIL!!! {error.message}</p>}

        <button className="button" onClick={this.fetchQuote}>Load again</button>

        <hr />

        <Async hasError={errorRepos !== null} isLoaded={loadingRepos === false}>
          <ul>
            {repos.map(repo =>
              <li key={repo.id}>
                <a href={repo.url}>{repo.name}</a>
              </li>
            )}
          </ul>
        </Async>
      </div>
    )
  }
}

export default AjaxTester

