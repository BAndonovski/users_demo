import jwtDecode from 'jwt-decode';
import localStore from 'store';
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Home from '../containers/home';
import Register from '../containers/register';
import Login from '../containers/log_in';
import Users from '../containers/users';

export const history = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


const Root = ({ store }) => {
  let isItAdmin = 0;
  const token = localStore.get('jwttoken');
  if (token !== undefined) {
    const jwt = token.key;
    const decoded = jwt !== 'Unauthorized' && jwtDecode(jwt);
    isItAdmin = decoded.isAdmin === 1;
  }

  const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => (
        isItAdmin === true
          ? <Component {...props} />
          : <Redirect
            to={{
              pathname: '/home',
            }}
          />
      )}
    />
  );
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <AdminRoute path="/users" component={Users} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  );
};
Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
