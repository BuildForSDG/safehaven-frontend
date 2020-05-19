import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import Example from '../Example/Example';
import Default from '../Layout/DefaultLayout';
import SignUp from '../Authentication/SignUp';
import SignIn from '../Authentication/SignIn';

const theme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: green
      },
    });

const Router = () => (
  <ThemeProvider theme={theme}>
    <Switch>
    <Route exact path="/login" render={() => <Default><SignIn /> </Default>} />
    <Route exact path="/signup" render={() => <Default><SignUp /> </Default>} />
    <Route exact path="/" render={() => <Default><Example /> </Default>}/>
  </Switch>
  </ThemeProvider>
  
);

export default Router;
