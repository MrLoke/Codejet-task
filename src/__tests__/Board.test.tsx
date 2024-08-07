import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Board } from 'src/components/Board/Board';
import { Player } from 'src/state/ticTacToeMachine';

describe('Board component', () => {
  const mockOnClick = jest.fn();
  const mockPlayer: (Player | null)[] = [
    null,
    'x',
    null,
    'o',
    'x',
    null,
    null,
    'o',
    null,
  ];

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('renders 9 Square components', () => {
    const { getAllByRole } = render(
      <Board onClick={mockOnClick} player={mockPlayer} />
    );
    const squares = getAllByRole('button');
    expect(squares).toHaveLength(9);
  });

  test('calls onClick with correct index when a Square is clicked', () => {
    const { getAllByRole } = render(
      <Board onClick={mockOnClick} player={mockPlayer} />
    );
    const squares = getAllByRole('button');

    fireEvent.click(squares[0]);
    expect(mockOnClick).toHaveBeenCalledWith(0);

    fireEvent.click(squares[4]);
    expect(mockOnClick).toHaveBeenCalledWith(4);
  });

  test('passes correct player prop to each Square', () => {
    const { getAllByRole } = render(
      <Board onClick={mockOnClick} player={mockPlayer} />
    );
    const squares = getAllByRole('button');

    expect(squares[0]).toHaveTextContent('');
    expect(squares[1]).toHaveTextContent('x');
    expect(squares[3]).toHaveTextContent('o');
    expect(squares[4]).toHaveTextContent('x');
    expect(squares[7]).toHaveTextContent('o');
  });
});
