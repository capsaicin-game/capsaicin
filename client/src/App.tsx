import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Game } from './game/Game';
import GameClient from './boardgameIO/gameClient';

export const App = (): React.ReactElement => {
  const App = styled.div`
    height: 100%;
  `;
  return (
    <App>
      <GameClient />
      <Game />
    </App>
  );
};
// import { Client } from 'boardgame.io/react';
// import { TicTacToe } from './boardgameIO/ticTacToe';
// import { TicTacToeBoard } from './boardgameIO/board';

// export const App = Client({
//   game: TicTacToe,
//   board: TicTacToeBoard,
// });
