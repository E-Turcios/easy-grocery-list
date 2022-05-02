import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Signup, Login } from '../components/account-entry/AuthForm';
import Dashboard from '../components/dashboard/Dashboard';
import SingleRecipe from '../components/dashboard/SingleRecipe';
import { Flex, Square } from '@chakra-ui/react';
import Sidebar from '../components/dashboard/Sidebar';
import { useAuth } from '../contexts/AuthContext';
import AllRecipes from '../components/dashboard/AllRecipes';

/**
 * COMPONENT
 */
export default function Routes() {
  const { currentUser } = useAuth();

  return currentUser ? (
    <div>
      <Flex>
        <Sidebar />
        <Square ml={20}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/all-recipes" component={AllRecipes} />
            <Route exact path="/recipe" component={SingleRecipe} />
          </Switch>
        </Square>
      </Flex>
    </div>
  ) : (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );
}
