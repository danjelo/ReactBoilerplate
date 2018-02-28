import React from 'react'
import T from 'prop-types'
import promisedHOC from '../utils/PromisedHOC'

import { getQuote } from '../utils/api'

const Quote = props =>
  <div>
    <p>{props.firstName} says:</p>
    <q>
      {props.theQuote}
    </q>
  </div>

Quote.propTypes = {
  theQuote: T.string.isRequired,
  firstName: T.string.isRequired
}

const mapToProps = state => ({ theQuote: state })

export default promisedHOC(getQuote, mapToProps)(Quote)
