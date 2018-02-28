import React from 'react'
import T from 'prop-types'

class PromiseLoader extends React.Component {

  static propTypes = {
    promise: T.func.isRequired,
    Component: T.func.isRequired
  }

  state = {
    loading: true,
    error: null,
    data: null,
  }

  async componentDidMount() {
    const { promise } = this.props
    try {
      const res = await promise()
      this.setState({ data: res, loading: false })
    } catch (error) {
      this.setState({ error: error, loading: false })
    }
  }

  render() {
    if (this.state.loading) {
      return <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
    }
    if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>
    }
    const { Component } = this.props;
    return <Component {...this.state.data} />
  }
}

export default PromiseLoader
