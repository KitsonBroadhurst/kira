import React from 'react'
import ErrorMessage from './ErrorMessage'

const withErrorBoundary = WrappedComponent => class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      hasResetOnce: false
    }
  }
  
  componentDidCatch(error, info) {
    // put the error into state
    this.setState({ error })
    // You can also log error messages to an error reporting service here
    
    // if we haven't reset yet, we should retry, set a timeout
    if (!this.state.hasResetOnce) {
      this.timeout = window.setTimeout(
        () => {
          this.setState({
            error: null,
            hasResetOnce: true
          })
        },
        3000
      )
    }
  }
  
  componentWillUnmount () {
    // if there's an active timeout when component unmounts, clean it up
    this.timeout && clearTimeout(this.timeout)
  }
  
  render() {
    const { error } = this.state

    // if there is an error, do something!
    if (error != null) {
      const message = error.message || error.description || ""
      console.log('An error occured: ', message)
      return (
        <ErrorMessage
          message="Oops. It looks like something went wrong!"
          link={{ text: "Take me home", route: "/"}}
        />
      )
    // there is no error, render the wrapped component, passing through props
    } else {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withErrorBoundary