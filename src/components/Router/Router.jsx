import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Example from '../Example/Example';
import Default from '../Layout/DefaultLayout';

const Router = () => (
  <Switch>
    <Route exact path="/" render={() => <Default><Example /> </Default>}/>
  </Switch>
);

export default Router;
