import React from 'react';

interface Props {
  send: (event: { type: 'PLAY'; value: number } | { type: 'RESET' }) => void;
}

export const ResetButton: React.FC<Props> = ({ send }) => (
  <button onClick={() => send({ type: 'RESET' })}>Reset Game</button>
);
