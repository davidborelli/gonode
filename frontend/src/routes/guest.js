import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '~/store';

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !store.getState().auth.signedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

GuestRoute.defaultProps = {
  location: {},
};

GuestRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.func,
  ]).isRequired,
  location: PropTypes.objectOf(PropTypes.any),
};

export default GuestRoute;
