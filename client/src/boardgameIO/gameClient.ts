// import Board from './Board';
import BgReact from 'boardgame.io/react'
import { Ctx } from 'boardgame.io';
import { GameState } from './types';
import {
  gameSetup
} from './utils/setupMethods'

const createGame = () => {
  return {
    name: 'Capsaicin',
    setup: () => (gameSetup(4)),

    // endIf: (G: any, ctx: any) => {
        
    // }
  };
}

const createClient = () => {
  return BgReact.Client({
    game: createGame(),
    numPlayers: 4,
    // board: Board,
    debug: true,
  });
}

export default createClient;
