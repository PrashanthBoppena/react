import { Basket } from '@/components/basket';
import { Footer, Navigation } from '@/components/common';
import * as ROUTES from '@/constants/routes';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import * as view from '@/views';
import  comp from '@/components/orderprocess/OrderProcessStepsComponent';
import  customerview from '@/components/customerview/Customer360Dashboard';
import AdminRoute from './AdminRoute';
import ClientRoute from './ClientRoute';
import PublicRoute from './PublicRoute';

// Revert back to history v4.10.0 because
// v5.0 breaks navigation
export const history = createBrowserHistory();

const AppRouter = () => (
<Router history={history}>
  <>
    <Navigation /> <Basket />
    <Switch>
      <Route exact path={ROUTES.SEARCH} component={view.Search} />
      <Route exact path={ROUTES.HOME} component={view.Home} />
      <Route exact path={ROUTES.SHOP} component={view.Shop} />
      <Route exact path={ROUTES.FEATURED_PRODUCTS} component={view.FeaturedProducts} />
      <Route exact path={ROUTES.RECOMMENDED_PRODUCTS} component={view.RecommendedProducts} />
      <PublicRoute exact path={ROUTES.ORDER_PROCESS} component={comp} />
      <PublicRoute exact path={ROUTES.CUSTOMER_VIEW} component={customerview} />
      <PublicRoute path={ROUTES.SIGNUP} component={view.SignUp} />
      <PublicRoute exact path={ROUTES.SIGNIN} component={view.SignIn} />
      <PublicRoute path={ROUTES.FORGOT_PASSWORD} component={view.ForgotPassword} />
      <Route path={ROUTES.VIEW_PRODUCT} component={view.ViewProduct} />
      <ClientRoute exact path={ROUTES.ACCOUNT} component={view.UserAccount} />
      <ClientRoute exact path={ROUTES.ACCOUNT_EDIT} component={view.EditAccount} />
      <ClientRoute path={ROUTES.CHECKOUT_STEP_1} component={view.CheckOutStep1} />
      <ClientRoute path={ROUTES.CHECKOUT_STEP_2} component={view.CheckOutStep2} />
      <ClientRoute path={ROUTES.CHECKOUT_STEP_3} component={view.CheckOutStep3} />
      <AdminRoute exact path={ROUTES.ADMIN_DASHBOARD} component={view.Dashboard} />
      <AdminRoute path={ROUTES.ADMIN_PRODUCTS} component={view.Products} />
      <AdminRoute path={ROUTES.ADD_PRODUCT} component={view.AddProduct} />
      <AdminRoute path={`${ROUTES.EDIT_PRODUCT}/:id`} component={view.EditProduct} />
      <PublicRoute component={view.PageNotFound} />
    </Switch>
    <Footer />
  </>
</Router>

);

export default AppRouter;
