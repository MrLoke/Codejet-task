import { routesPath } from 'src/routes/routes';
import { NotFoundPageWrapper, StyledLink } from './NotFoundPageStyled';

export const NotFoundPage = () => {
  return (
    <NotFoundPageWrapper>
      <h1>Page Not Found</h1>
      <StyledLink to={routesPath.GAME}>Back to the game</StyledLink>
    </NotFoundPageWrapper>
  );
};
