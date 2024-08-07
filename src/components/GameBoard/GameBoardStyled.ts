import styled from 'styled-components';

type GameInfoProps = {
  $isvisible: boolean | string;
};

export const GameInfo = styled.div<GameInfoProps>`
  visibility: ${({ $isvisible }) => ($isvisible ? 'visible' : 'hidden')};
  height: 105px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const WinnerTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const DrawTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const InactivityGame = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
`;

export const InactivityGameInfo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const Winner = styled.span`
  text-transform: uppercase;
`;

export const ResetButton = styled.button`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.md};
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.buttonHoverColor};
  }
`;
