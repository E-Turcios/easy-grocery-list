import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </div>
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
