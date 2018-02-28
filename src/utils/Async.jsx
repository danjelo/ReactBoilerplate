import React from 'react'
import { PropTypes as T } from 'prop-types'

// simple helper to remove boilerplate for async requests
// Usage: <Async hasError={error !== null} isLoaded={!IsFetching}> <YourComponent ... / > </Async>

const Async = ({ hasError, errorObj, errorText, isLoaded, className, loadText, children }) => {
  if (hasError || errorObj !== null) {
    console.error(errorObj)
    return (<div style={{ color: 'red' }}><i className="fa fa-exclamation-triangle" /> {errorText}</div>)
  }
  if (isLoaded && children === undefined) {
    return null
  }
  if (isLoaded) {
    return (<div className={className}>{children}</div>)
  }
  return (
    <div>
      <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
      <span>{loadText}</span>
    </div>
  )
}

Async.propTypes = {
  hasError: T.bool,
  errorObj: T.object,
  errorText: T.string,
  isLoaded: T.bool.isRequired,
  className: T.string,
  loadText: T.node,
  children: T.oneOfType([
    T.arrayOf(T.node),
    T.node
  ])
}

Async.defaultProps = {
  errorObj: null,
  hasError: false,
  errorText: 'Unexpected error occured',
  loadText: 'Loading'
};

export default Async
