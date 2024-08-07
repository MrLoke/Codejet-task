import React from 'react';
import { GameBoardContainer } from './GameBoardStyled';
import { Square } from '../Square/Square';

interface Props {
  board: string[];
  send: (event: { type: string; index?: number }) => void;
}

export const GameBoard: React.FC<Props> = ({ board, send }) => (
  <GameBoardContainer>
    {board.map((value, index) => (
      <Square
        key={index}
        value={value}
        onClick={() => send({ type: 'MAKE_MOVE', index })}
      />
    ))}
  </GameBoardContainer>
);
