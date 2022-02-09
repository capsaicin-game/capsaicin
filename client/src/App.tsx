import React from 'react';
import './App.css';
import { Game } from './game/Game';
import { Client } from 'boardgame.io/client'
import { Capsaicin } from './boardgameIO/capsaicin'
import { Debug } from 'boardgame.io/debug'

const buildClient = () => {
  const client = Client({
    game: Capsaicin(),
    // remove debug log for prod
    debug: { impl: Debug },
  });
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
