import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Admin from '../pages/admin/Admin';

export const routes = [
  {
    text: 'home',
    route: '/',
    exact: true,
    component: <Home></Home>,
  },
  {
    text: 'contacto',
    route: '/contacto',
    component: <Contact></Contact>,
  },
  {
    text: 'acerca',
    route: '/acerca',
    component: <About></About>,
  },
  {
    text: 'admin',
    route: '/admin',
    exact: false,
    component: <Admin></Admin>,
  },
];
export const linksData = routes.reduce(
  (acc, { text, route }) => [...acc, { text, route }],
  []
);
