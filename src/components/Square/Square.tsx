import { SquareStyled } from './SquareStyled';

type Props = {
  index: number;
  onClick: () => void;
  player: 'x' | 'o' | null;
};

export const Square: React.FC<Props> = ({ index, onClick, player }: Props) => {
  return (
    <SquareStyled
      key={index}
      onClick={onClick}
      $dataplayer={player !== null ? player : ''} // It's a Transient Props with prefix $ for avoid warning in console
    />
  );
};
