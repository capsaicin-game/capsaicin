import React from 'react';
import './App.css';

import { Client } from 'boardgame.io/react';
import { TicTacToe } from './boardgameIO/ticTacToe';
import { TicTacToeBoard } from './boardgameIO/board';

export const App = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
});
