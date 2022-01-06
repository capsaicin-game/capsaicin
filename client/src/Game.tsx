import React from 'react';
import styled from 'styled-components';

export const Game = (): React.ReactElement => {
  let Board = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
  `;

  let Market = styled.div`
    grid-column: 1;
    grid-row: 1 / 5;
    background-color: #349854;
    height: 100%;
  `;
  let Auction = styled.div`
    grid-column: 2 / 6;
    grid-row: 1;
    background-color: #872354;
  `;
  let Patch = styled.div`
    grid-column: 2 / 4;
    grid-row: 2 / 5;
    background-color: #786832;
  `;
  let Cookoff = styled.div`
    grid-column: 4 / 6;
    grid-row: 2 / 5;
    background-color: #679273;
  `;
  let CityHall = styled.div`
    grid-column: 1 / 3;
    grid-row: 5;
    background-color: #342376;
  `;
  let TurnOrder = styled.div`
    grid-column: 3 / 6;
    grid-row: 5;
    background-color: #878922;
  `;
  return (
    <Board>
      <Market>market! </Market>
      <Auction>auction</Auction>
      <Patch>patch</Patch>
      <Cookoff>cookoff</Cookoff>
      <CityHall>city hall</CityHall>
      <TurnOrder>turn order</TurnOrder>
    </Board>
  );
};
