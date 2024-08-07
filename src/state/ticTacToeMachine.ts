import { EventObject, createMachine, assign } from 'xstate';

function assertEvent<TEvent extends EventObject, Type extends TEvent['type']>(
  ev: TEvent,
  type: Type
): asserts ev is Extract<TEvent, { type: Type }> {
  if (ev.type !== type) {
    throw new Error('Unexpected event type.');
  }
}

type StateContext = {
  board: Array<Player | null>;
  moves: number;
  player: Player;
  winner: Player | undefined;
  draw: boolean;
  lastMoveTimestamp: number;
};

export type Player = 'x' | 'o';

const context: StateContext = {
  board: Array(9).fill(null) as Array<Player | null>,
  moves: 0,
  player: 'x' as Player,
  winner: undefined as Player | undefined,
  draw: false,
  lastMoveTimestamp: Date.now(),
};

export const ticTacToeMachine = createMachine(
  {
    initial: 'playing',
    types: {} as {
      context: typeof context;
      events:
        | { type: 'PLAY'; value: number }
        | { type: 'RESET' }
        | { type: 'TIMEOUT' };
    },
    context,
    states: {
      playing: {
        always: [
          { target: 'gameOver.winner', guard: 'checkWin' },
          { target: 'gameOver.draw', guard: 'checkDraw' },
          { target: 'inactivity', guard: 'isInactivity' },
        ],
        on: {
          PLAY: [
            {
              target: 'playing',
              guard: 'isValidMove',
              actions: ['updateBoard', 'resetInactivityTimer'],
            },
          ],
          TIMEOUT: {
            target: 'inactivity',
          },
        },
      },
      inactivity: {
        after: {
          30000: {
            target: 'inactivity',
          },
        },
        on: {
          PLAY: {
            target: 'playing',
            actions: ['updateBoard', 'resetInactivityTimer'],
          },
          RESET: {
            target: 'playing',
            actions: 'resetGame',
          },
        },
      },
      gameOver: {
        initial: 'winner',
        states: {
          winner: {
            tags: 'winner',
            entry: 'setWinner',
          },
          draw: {
            tags: 'draw',
          },
        },
        on: {
          RESET: {
            target: 'playing',
            actions: 'resetGame',
          },
        },
      },
    },
  },
  {
    actions: {
      updateBoard: assign({
        board: ({ context, event }) => {
          assertEvent(event, 'PLAY');
          const updatedBoard = [...context.board];
          updatedBoard[event.value] = context.player;
          return updatedBoard;
        },
        moves: ({ context }) => context.moves + 1,
        player: ({ context }) => (context.player === 'x' ? 'o' : 'x'),
        lastMoveTimestamp: () => Date.now(),
      }),
      resetGame: assign({
        board: Array(9).fill(null) as Array<Player | null>,
        moves: 0,
        player: 'x' as Player,
        winner: undefined as Player | undefined,
        draw: false,
        lastMoveTimestamp: Date.now(),
      }),
      setWinner: assign({
        winner: ({ context }) => (context.player === 'x' ? 'o' : 'x'),
      }),
      resetInactivityTimer: assign({
        lastMoveTimestamp: () => Date.now(),
      }),
    },
    guards: {
      checkWin: ({ context }) => {
        const { board } = context;
        const winningLines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];

        for (const line of winningLines) {
          const xWon = line.every((index) => board[index] === 'x');
          if (xWon) return true;

          const oWon = line.every((index) => board[index] === 'o');
          if (oWon) return true;
        }
        return false;
      },
      checkDraw: ({ context }) => context.moves === 9,
      isValidMove: ({ context, event }) => {
        if (event.type !== 'PLAY') return false;
        return context.board[event.value] === null;
      },
      isInactivity: ({ context }) => {
        return Date.now() - context.lastMoveTimestamp > 30000;
      },
    },
  }
);
