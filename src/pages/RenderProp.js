import React from 'react'
import T from 'prop-types'
import Loader from '../utils/PromiseLoader'


const getPromise = () =>
  fetch('https://api.github.com/zen')
    .then(response => response.text())
    .then(q => ({ theQuote: q })) // returns object that match components props


const Quote = props =>
  <q>
    {props.theQuote}
  </q>

Quote.propTypes = {
  theQuote: T.string.isRequired
}


const QuotePage = () =>
  <div>
    <Loader
      promise={getPromise}
      Component={Quote} />
  </div>

export default QuotePage
