import React from 'react'
import T from 'prop-types'
import promisedHOC from '../utils/PromisedHOC'


const handleError = r => {
  if (!r.ok) throw Error(r.statusText)
  return r
}

const quoteApi = url =>
  fetch(url)
    .then(handleError)
    .then(r => r.text())

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

const promise = ownProps => quoteApi(ownProps.gitUrl)//.then(text => ({ theQuote: text }))
const mapToProps = state => ({ theQuote: state })

const Loader = () => <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
const Fail = props => <span>Error: {props.message}</span>

const TheQuote = promisedHOC(promise, mapToProps)(Quote, Loader, Fail)


const QuotePage = () =>
  <TheQuote firstName="Danne" gitUrl="https://api.github.com/zen" />


export default QuotePage
