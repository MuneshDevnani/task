import React, { Component } from 'react'
import PageWraper from './components/pagewraper'
import AdminWraper from './components/AdminWraper'
import LoginWraper from './components/LoginWraper'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// Pages
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
//Admin Pages
import Dashboard from './components/pages/Admin/Dashboard'
import Users from './components/pages/Admin/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>

          <Route
            exact={true}
            path='/admin'
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                    <AdminWraper>
                      <Dashboard />
                    </AdminWraper>
                    :
                    <LoginWraper>
                      <Login />
                    </LoginWraper>
                  }
                </div>
              )
            }}
          />

          <Route
            exact={true}
            path='/admin/users'
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                    <AdminWraper>
                      <Users />
                    </AdminWraper>
                    :
                    <LoginWraper>
                      <Login />
                    </LoginWraper>
                  }
                </div>
              )
            }}
          />

          <Route
            exact={true}
            path="/signup"
            render={props => {
              if (this.props.auth.token) {
                return (
                  <Redirect to="/" />
                )
              } else {
                return (
                  <LoginWraper>
                    <Signup />
                  </LoginWraper>
                )
              }
            }} />

          <Route
            exact={true}
            path="/login"
            render={props => {
              if (this.props.auth.token) {
                return (
                  <Redirect to="/" />
                )
              } else {
                return (
                  <LoginWraper>
                    <Login />
                  </LoginWraper>
                )
              }
            }} />

          <Route
            exact={true}
            path="/"
            render={props => (
              <PageWraper>
                <Home {...props} />
              </PageWraper>
            )}
          />

        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
