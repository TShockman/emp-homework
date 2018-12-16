import Home from './modules/home';
import Login from './modules/auth/login';
import UserDetails from './modules/user/details';

// define a component for each route
const routes = {
  '/': {
    component: Home,
    '/login': {
      component: Login
    },
    '/user/:id': {
      component: UserDetails
    }
  }
};

export default routes;