import { createBrowserRouter } from 'react-router-dom';
import { Game } from 'src/pages/Game/Game';
import { NotFoundPage } from 'src/pages/NotFound/NotFoundPage';
import { Root } from 'src/Root';

export const routesPath = {
  GAME: '/',
  NOT_FOUND: '*',
};

export const router = createBrowserRouter([
  {
    path: routesPath.GAME,
    element: (
      <Root>
        <Game />
      </Root>
    ),
  },
  {
    path: routesPath.NOT_FOUND,
    element: (
      <Root>
        <NotFoundPage />
      </Root>
    ),
  },
]);
