import React from 'react';
import styled from 'styled-components';
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
  const App = styled.div`
    height: 100%;
  `
  buildClient()
  return (
    <App>
      <Game />
    </App>
  )
};
