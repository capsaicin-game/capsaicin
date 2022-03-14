import React from 'react';
import './App.css';
import { Game } from './game/Game'
import createClient from './boardgameIO/gameClient'

const buildClient = (numPlayers: number=4) => {
  const client = createClient(numPlayers);
  client.start()
}

export const App = (): React.ReactElement => {
  buildClient()
  return (
    <div className="app">
      <Game />
    </div>
  );
};
