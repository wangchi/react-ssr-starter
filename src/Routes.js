import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';

const routes = [
  {
    path: '/',
    exact: true,
    component: App,
    key: 'app',
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
        key: 'home',
      },
      {
        path: '/login',
        component: Login,
        key: 'login',
      }
    ]
  }
];

export default routes;
