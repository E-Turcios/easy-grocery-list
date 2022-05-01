import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Signup, Login } from '../components/account-entry/AuthForm';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../components/dashboard/';
/**
 * COMPONENT
 */
export default class Routes extends Component {
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
