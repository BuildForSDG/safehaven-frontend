import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Example from '../Example/Example';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Example} />
  </Switch>
);

export default Router;
