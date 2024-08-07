import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { Square } from 'src/components/Square/Square';

describe('Square component', () => {
  test('renders Square correctly', () => {
    const handleClick = jest.fn();
    render(<Square index={0} onClick={handleClick} player={null} />);

    const square = screen.getByRole('button');
    expect(square).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Square index={0} onClick={handleClick} player={null} />);

    const square = screen.getByRole('button');
    fireEvent.click(square);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('displays correct player prop', () => {
    const handleClick = jest.fn();
    render(<Square index={0} onClick={handleClick} player="x" />);

    const square = screen.getByRole('button');
    expect(square).toHaveAttribute('data-player', 'x');
  });

  test('does not display player prop when player is null', () => {
    const handleClick = jest.fn();
    render(<Square index={0} onClick={handleClick} player={null} />);

    const square = screen.getByRole('button');
    expect(square).toHaveAttribute('data-player', '');
  });
});
