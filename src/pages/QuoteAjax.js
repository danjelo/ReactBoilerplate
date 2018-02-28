import React, { Component } from 'react'
import T from 'prop-types'

import { getQuote } from '../utils/api'


const Quote = props =>
  <div>
    <p>{props.firstName} says:</p>
    <q>
      {props.theQuote}
    </q>
    <button
      className="button"
      onClick={props.reload}>Load again</button>
  </div>

Quote.propTypes = {
  theQuote: T.string.isRequired,
  firstName: T.string.isRequired,
  reload: T.func.isRequired
}


class QuoteAjax extends Component {

  state = {
    loading: true,
    data: null,
    error: null,
  }

  componentDidMount() {
    this.fetchQuote(false)
  }

  componentWillReceiveProps() {
    this.fetchQuote()
  }

  fetchQuote = (load = true) => {
    if (load) {
      this.setState({ data: null, loading: true })
    }
    getQuote()
      .then(text => this.setState({ data: text, loading: false }))
      .catch(error => this.setState({ error: error, loading: false }))
  }

  render() {
    const { data, loading, error } = this.state
    if (loading === true)
      return <span>loading...</span>
    if (error !== null)
      return <span>Error: {error.message}</span>
    return (
      <Quote
        theQuote={data}
        firstName={this.props.firstName}
        reload={this.fetchQuote} />
    )
  }
}

export default QuoteAjax

