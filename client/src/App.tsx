import React from 'react';
import './App.css';
import { Game } from './game/Game';
import GameClient from './boardgameIO/gameClient';

export const App = (): React.ReactElement => {
  return (
    <div className="app">
      <GameClient />
      <Game />
    </div>
  );
};
// import { Client } from 'boardgame.io/react';
// import { TicTacToe } from './boardgameIO/ticTacToe';
// import { TicTacToeBoard } from './boardgameIO/board';

// export const App = Client({
//   game: TicTacToe,
//   board: TicTacToeBoard,
// });
