import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';

const routes = [
  {
    path: '/',
    component: App,
    key: 'app',
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
        key: 'home',
        loadData: Home.loadData
      },
      {
        path: '/login',
        exact: true,
        component: Login,
        key: 'login',
      }
    ]
  }
];

export default routes;
