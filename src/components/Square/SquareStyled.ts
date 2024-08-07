import styled from 'styled-components';

type SquareProps = {
  $dataplayer: string;
};

export const SquareStyled = styled.div<SquareProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  background: ${({ theme }) => theme.colors.squareColor};
  position: relative;

  &::before {
    content: '${({ $dataplayer }) => $dataplayer}';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
