// PrivateRoute.js

import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as ROUTES from '@/constants/routes';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? (
        <main className="content">
          <Component {...props} />
        </main>
        
      ) : (
        <Redirect to={{ pathname: ROUTES.HOME, state: { from: props.location } }} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: !!state.auth, // Assuming your auth state structure
});

export default connect(mapStateToProps)(PrivateRoute);
