import React        from 'react'
import { Route }    from 'react-router-dom'
import withErrorBoundary from './withErrorBoundary'

const RouteBase = props => {
  const { layout: Layout, component: Component, ...rest } = props

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  )
}

const RouteWithLayout = withErrorBoundary(RouteBase)

export default RouteWithLayout