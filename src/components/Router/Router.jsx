import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Default from '../Layout/DefaultLayout';
import SignUp from '../Authentication/SignUp';
import SignIn from '../Authentication/SignIn';
import LandingPage from '../LandingPage/LandingPage';
import ProfilePage from '../Profile/Profile';
import PageNotFound from '../Layout/PageNotFound';

const theme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: green,
      },
    });

const Router = () => (
  <ThemeProvider theme={theme}>
    <Switch>
    <Route exact path="/login" render={() => <Default><SignIn /> </Default>} />
    <Route exact path="/provider" render={() => <Default><SignUp /> </Default>} />
    <Route exact path="/signup" render={() => <Default><SignUp /> </Default>} />
    <Route exact path="/profile/edit" render={() => <ProfilePage />} />
    <Route exact path="/profile" render={() => <ProfilePage />} />
    <Route exact path="/" render={() => <Default><LandingPage /> </Default>}/>
    <Route exact path="**" render={() => <Default><PageNotFound /> </Default>}/>
  </Switch>
  </ThemeProvider>
  
);

export default Router;
