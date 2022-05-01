import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Signup, Login } from '../components/account-entry/AuthForm';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../components/dashboard/Dashboard';
/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {};

const mapDispatch = (dispatch) => {};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
