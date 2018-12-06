import Home from "./modules/home/HomeContainer";
import Login from './modules/auth/login';

const routes = {
  '/': {
    component: Home,
    '/login': {
      component: Login
    }
  }
};

export default routes;