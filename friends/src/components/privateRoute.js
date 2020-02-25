import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) =>
{
  const token = window.localStorage.getItem('NOTASPECIALAUTHTOKEN');
  return (
    <Route
      {...rest}
      render={props => {
        return ( token ? <Component {...props} /> : <Redirect to="/login" />);
      }}
    />
  );
};

export default PrivateRoute;
