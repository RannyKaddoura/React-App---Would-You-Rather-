import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props =>
        sessionStorage.getItem('auth') === 'vJeHm0n5L3osynxL3DWWC6SjIYZ0DU2w' ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
export default PrivateRouter