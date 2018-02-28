import React, { Component } from 'react'


const promisedHOC = (promise, mapStateToProps) =>
  (Wrapped, Loader, Failed) =>
    class extends Component {

      static displayName = `promisedHOC(${(Wrapped.displayName || Wrapped.name || 'Component')})`

      state = {
        loading: true,
        data: null,
        error: null
      }

      componentDidMount() {
        this.execPromise(this.props, false)
      }

      componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
          this.execPromise(nextProps)
        }
      }

      execPromise = async (props, load = true) => {
        if (load) {
          this.setState({ data: null, loading: true })
        }
        let res = null
        try {
          res = await promise(props)
        }catch (error) {
          this.setState({ error: error, loading: false })
          return
        }
        if (mapStateToProps !== undefined) {
          res = mapStateToProps(res)
        }
        this.setState({ data: res, loading: false })
      }

      reload = () => this.execPromise(this.props)

      render() {
        const { data, loading, error } = this.state
        if (loading === true) {
          if (Loader !== undefined)
            return <Loader />
          return <span>Loading..</span>
        }
        if (error !== null) {
          console.error(error)
          if (Failed !== undefined)
            return <Failed message={error.message} />
          return <span>Error occured</span>
        }
        // ... and renders the wrapped component with the fresh data!
        // Notice that we pass through any additional props
        return <Wrapped {...data} {...this.props} reload={this.reload} />
      }
    }


export default promisedHOC
