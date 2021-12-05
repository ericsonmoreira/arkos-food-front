import { Switch, Route, Redirect } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import LoginLaytout from '../layouts/LoginLaytout';
import Login from '../pages/Login';
import Products from '../pages/Products';
import NAMES from './router.names';
import RouterWithLayout from './RouterWithLayout';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={NAMES.HOME}>
        <Redirect to={NAMES.PRODUCTS} />
      </Route>
      <RouterWithLayout
        layout={LoginLaytout}
        path={NAMES.LOGIN}
        component={Login}
        exact
      />
      <RouterWithLayout
        layout={DashboardLayout}
        path={NAMES.PRODUCTS}
        component={Products}
        isPrivate
        exact
      />
    </Switch>
  );
};

export default Routes;
