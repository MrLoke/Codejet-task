import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  height: 40vmin;
  width: 40vmin;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0.25rem;
  grid-row-gap: 0.25rem;
  background: #ddd;
  border: 4px solid;
  border-color: ${({ theme }) => theme.colors.boardBorderColor};
  border-radius: 0.3rem;
`;
