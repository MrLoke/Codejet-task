import { useMachine } from '@xstate/react';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  DrawTitle,
  GameInfo,
  InactivityGameInfo,
  ResetButton,
  Winner,
  WinnerTitle,
} from './GameBoardStyled';
import { ticTacToeMachine } from 'src/state/ticTacToeMachine';
import { Board } from '../Board/Board';

export const GameBoard = () => {
  const [state, send] = useMachine(ticTacToeMachine);
  const timeoutRef = useRef<number | null>(null);
  const isFirstRender = useRef<boolean>(true);

  const player = useMemo(
    () => state.context.board.map((value) => value ?? null),
    [state.context.board]
  );

  const onClick = useCallback(
    (index: number) => {
      send({ type: 'PLAY', value: index });
      isFirstRender.current = false;
    },
    [send]
  );

  const resetGame = useCallback(() => {
    send({ type: 'RESET' });
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    isFirstRender.current = true;
  }, [send]);

  useEffect(() => {
    if (state.matches('playing') && !isFirstRender.current) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        send({ type: 'TIMEOUT' });
      }, 30000);
    }

    return () => {
      if (timeoutRef.current && !isFirstRender.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [state, send]);

  return (
    <>
      <GameInfo
        $isvisible={state.context.winner || state.context.winner === undefined} // It's a Transient Props with prefix $ for avoid warning in console
      >
        {state.matches('inactivity') && timeoutRef.current !== null && (
          <>
            <InactivityGameInfo>Inactivity game detected.</InactivityGameInfo>
          </>
        )}
        {state.matches('gameOver') && (
          <>
            {state.hasTag('winner') && (
              <WinnerTitle>
                Winner player: <Winner>{state.context.winner}</Winner>
              </WinnerTitle>
            )}
            {state.hasTag('draw') && <DrawTitle>Draw</DrawTitle>}
            <ResetButton onClick={resetGame}>Reset game</ResetButton>
          </>
        )}
      </GameInfo>
      <Board onClick={onClick} player={player} />
    </>
  );
};
