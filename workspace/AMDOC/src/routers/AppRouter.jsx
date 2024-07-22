import { Basket } from '@/components/basket';
import { Footer, Navigation } from '@/components/common';
import * as ROUTES from '@/constants/routes';
import { createBrowserHistory } from 'history';
import React, { useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import * as view from '@/views';
import ColorCustomizer from '@/components/settings/ColorCustomizer';
import Customer360Dashboard from '@/components/customerview/Customer360Dashboard';
import AdminRoute from './AdminRoute';
import ClientRoute from './ClientRoute';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => {
  const [appColors, setAppColors] = useState({
    navBg: '#f8f8f8',
    navBgScrolled: '#fff',
    backgroundColor: '#fff',
    paragraphColor: '#070000',
    headingColor: '#1a1a1a',
    borderColor: '#e1e1e1',
    buttonColor: '#3b9620',
  });

  const handleUpdateColors = (newColors) => {
    setAppColors(newColors);
  };

  return (
    <Router history={history}>
      <>
        <Navigation />
        <Basket />
        <Switch>
          <Route component={view.Search} exact path={ROUTES.SEARCH} />
          <Route component={view.Home} exact path={ROUTES.HOME} />
          <Route component={view.Shop} exact path={ROUTES.SHOP} />
          <Route component={view.FeaturedProducts} exact path={ROUTES.FEATURED_PRODUCTS} />
          <Route component={view.RecommendedProducts} exact path={ROUTES.RECOMMENDED_PRODUCTS} />
          <PublicRoute component={Customer360Dashboard} path={ROUTES.CUSTOMER_VIEW} />

          <PublicRoute exact path={ROUTES.COLOR_CUSTOMMISER}>
            <ColorCustomizer onUpdateColors={handleUpdateColors} />
          </PublicRoute>
          <PublicRoute component={view.SignUp} path={ROUTES.SIGNUP} />
          <PublicRoute component={view.SignIn} exact path={ROUTES.SIGNIN} />
          <PublicRoute component={view.ForgotPassword} path={ROUTES.FORGOT_PASSWORD} />
          <Route component={view.ViewProduct} path={ROUTES.VIEW_PRODUCT} />
          <ClientRoute component={view.UserAccount} exact path={ROUTES.ACCOUNT} />
          <ClientRoute component={view.EditAccount} exact path={ROUTES.ACCOUNT_EDIT} />
          <ClientRoute component={view.CheckOutStep1} path={ROUTES.CHECKOUT_STEP_1} />
          <ClientRoute component={view.CheckOutStep2} path={ROUTES.CHECKOUT_STEP_2} />
          <ClientRoute component={view.CheckOutStep3} path={ROUTES.CHECKOUT_STEP_3} />
          <AdminRoute component={view.Dashboard} exact path={ROUTES.ADMIN_DASHBOARD} />
          <AdminRoute component={view.Products} path={ROUTES.ADMIN_PRODUCTS} />
          <AdminRoute component={view.AddProduct} path={ROUTES.ADD_PRODUCT} />
          <AdminRoute component={view.EditProduct} path={`${ROUTES.EDIT_PRODUCT}/:id`} />
          <PublicRoute component={view.PageNotFound} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default AppRouter;
