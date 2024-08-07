import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Game } from 'src/pages/Game/Game';

jest.mock('src/components/GameBoard/GameBoard', () => ({
  GameBoard: () => <div>GameBoard Mock</div>,
}));

describe('Game component', () => {
  test('renders the game title', () => {
    const { getByText } = render(<Game />);
    const titleElement = getByText(/Tic-Tac-Toe Game/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the GameBoard component', () => {
    const { getByText } = render(<Game />);
    const gameBoardElement = getByText(/GameBoard Mock/i);
    expect(gameBoardElement).toBeInTheDocument();
  });
});
