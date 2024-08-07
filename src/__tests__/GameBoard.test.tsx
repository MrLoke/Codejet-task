import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { GameBoard } from 'src/components/GameBoard/GameBoard';
import { ticTacToeMachine } from 'src/state/ticTacToeMachine';
import { createActor } from 'xstate';

describe('GameBoard component', () => {
  test('renders GameBoard correctly', () => {
    render(<GameBoard />);
    expect(screen.getByText('Tic-Tac-Toe Game')).toBeInTheDocument();
  });

  test('handles clicks and updates board state', () => {
    render(<GameBoard />);
    const squares = screen.getAllByRole('button');

    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent('x');
  });

  test('displays winner when game is won', () => {
    const machine = createActor(ticTacToeMachine).start();
    machine.send({ type: 'PLAY', value: 0 });
    machine.send({ type: 'PLAY', value: 3 });
    machine.send({ type: 'PLAY', value: 1 });
    machine.send({ type: 'PLAY', value: 4 });
    machine.send({ type: 'PLAY', value: 2 });

    render(<GameBoard />);

    expect(screen.getByText(/Winner player:/)).toBeInTheDocument();
  });

  test('displays draw when game is drawn', () => {
    const machine = createActor(ticTacToeMachine).start();
    machine.send({ type: 'PLAY', value: 0 });
    machine.send({ type: 'PLAY', value: 1 });
    machine.send({ type: 'PLAY', value: 2 });
    machine.send({ type: 'PLAY', value: 4 });
    machine.send({ type: 'PLAY', value: 3 });
    machine.send({ type: 'PLAY', value: 5 });
    machine.send({ type: 'PLAY', value: 7 });
    machine.send({ type: 'PLAY', value: 6 });
    machine.send({ type: 'PLAY', value: 8 });

    render(<GameBoard />);

    expect(screen.getByText(/Draw/)).toBeInTheDocument();
  });

  test('resets the game when reset button is clicked', () => {
    render(<GameBoard />);
    const squares = screen.getAllByRole('button');

    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent('x');

    fireEvent.click(screen.getByText('Reset game'));
    squares.forEach((square) => expect(square).toHaveTextContent(''));
  });

  test('displays inactivity message after timeout', () => {
    jest.useFakeTimers();
    render(<GameBoard />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    act(() => {
      jest.advanceTimersByTime(30000);
    });

    expect(screen.getByText(/Inactivity game detected/)).toBeInTheDocument();
    jest.useRealTimers();
  });
});
