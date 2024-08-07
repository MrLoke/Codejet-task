import React from 'react';
import { SquareButton } from './SquareStyled';

interface Props {
  value: string;
  onClick: () => void;
}

export const Square: React.FC<Props> = ({ value, onClick }) => (
  <SquareButton onClick={onClick}>{value}</SquareButton>
);
