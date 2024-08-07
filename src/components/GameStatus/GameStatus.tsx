import React from 'react';
import { StateValue } from 'xstate';

interface Props {
  state: { value: StateValue; context: { currentPlayer: string } };
}

export const GameStatus: React.FC<Props> = ({ state }) => {
  let statusMessage = '';

  switch (state.value) {
    case 'playing':
      statusMessage = `Current Player: ${state.context.currentPlayer}`;
      break;
    case 'won':
      statusMessage = `Winner: ${state.context.currentPlayer}`;
      break;
    case 'draw':
      statusMessage = 'Game Draw';
      break;
    default:
      statusMessage = 'Start the Game!';
  }

  return <div>{statusMessage}</div>;
};
