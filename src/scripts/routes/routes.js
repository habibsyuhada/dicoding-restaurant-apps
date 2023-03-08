import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Home, // default page
  '/home': Home, // default page
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
