import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const NotFoundPageWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.md};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
