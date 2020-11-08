import Header from '../templates/header';
import Home from '../page/Home';
import Character from '../page/Characters';
import Error404 from '../page/Error404';
import getHash from '../utilies/getHash';
import resolveRoutes from '../utilies/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;