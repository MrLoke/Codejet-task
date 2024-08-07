import React from 'react';
import { useMachine } from '@xstate/react';
import { ticTacToeMachine } from 'src/state/ticTacToeMachine';
import { GameStatus } from 'src/components/GameStatus/GameStatus';
import { GameBoard } from 'src/components/GameBoard/GameBoard';
import { ResetButton } from 'src/components/ResetButton/ResetButton';

export const Game: React.FC = () => {
  const [state, send] = useMachine(ticTacToeMachine);

  return (
    <>
      <GameStatus state={state} />
      <GameBoard
        board={state.context.board.map((cell) => (cell !== null ? cell : ''))}
        send={send}
      />
      <ResetButton send={send} />
    </>
  );
};
