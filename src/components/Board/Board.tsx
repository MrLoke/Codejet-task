import { Player } from 'src/state/ticTacToeMachine';
import { Square } from '../Square/Square';
import { Grid } from './BoardStyled';
import { rangeArray } from 'src/utils/rangeArray';

type Props = {
  onClick: (index: number) => void;
  player: (Player | null)[];
};

export const Board = ({ onClick, player }: Props) => {
  return (
    <Grid>
      {rangeArray(0, 9).map((index) => {
        return (
          <Square
            index={index}
            onClick={() => onClick(index)}
            key={index}
            player={(player?.[index] as 'x' | 'o' | null) || null}
          />
        );
      })}
    </Grid>
  );
};
