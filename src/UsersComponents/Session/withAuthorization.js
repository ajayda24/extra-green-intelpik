import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import AuthUserContext from './context'
import { withFirebase } from '../Firebase/index'

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        (authUser) => {
          console.log(authUser)
          if (!condition(authUser)) {
            this.props.history.push('/login')
          }
        },
        () => {
          this.props.history.push('/login')
        }
      )
    }
    componentWillUnmount() {
      console.log('Authorization component')
      this.listener()
    }
    render() {
      return (
        <AuthUserContext.Consumer>
          {(authUser) =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      )
    }
  }
  return compose(withRouter, withFirebase)(WithAuthorization)
}

export default withAuthorization
