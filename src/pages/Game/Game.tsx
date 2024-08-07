import './styles.css';
import { GameBoard } from 'src/components/GameBoard/GameBoard';
import { GameTitle, GameWrapper } from './GameStyled';

export const Game = () => {
  return (
    <GameWrapper>
      <GameTitle>Tic-Tac-Toe Game</GameTitle>
      <GameBoard />
    </GameWrapper>
  );
};
