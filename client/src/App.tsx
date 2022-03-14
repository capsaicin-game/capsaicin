import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Game } from './game/Game';
import { Client } from 'boardgame.io/client'
import { Capsaicin } from './boardgameIO/capsaicin'
import { Debug } from 'boardgame.io/debug'

const buildClient = (numPlayers: number=4) => {
  const client = Client({
    game: Capsaicin(),
    // TODO add board here at the client level.
    // remove debug log for prod
    debug: { impl: Debug },
    numPlayers: 4,
  });
  client.start()
}

export const App = (): React.ReactElement => {
  const App = styled.div`
    height: 100%;
  `
  buildClient(4)
  return (
    <App>
      <Game />
    </App>
  )
};
