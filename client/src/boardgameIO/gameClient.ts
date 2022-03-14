// import Board from './Board';
import { Client } from 'boardgame.io/client'
import {
  gameSetup
} from './utils/setupMethods'
import { GameState } from './models'
import { GamePhases } from './models/types'
import { buyLot } from './utils/auctionMethods'

const createGame = (numPlayers: number) => {
  return {
    name: 'Capsaicin',
    setup: () => (gameSetup(numPlayers)),
    phases: {
      [GamePhases.AUCTION]: {
        start: true,
        moves: { buyLot },
        endIf: (G: GameState) => G.currentAuction.length === 0,
        next: 'PLANT'
      },
      PLANT: {
        next: 'HARVEST'
      },
      HARVEST: {
        next: 'FULFILLMENT'
      },
      FULFILLMENT: {
        next: 'BIDDING'
        /* onEnd: (G) =>{
          In this function. You need to refresh the Auction Cards
          AND check to see if time has progressed from morning to Evening
          AND check to see if the game is over//it is the last turn
        }
        */
      },
      BIDDING: {
        next: 'AUCTION'
      }

    }

  };
}

const createClient = (numPlayers: number) => {
  return Client({
    game: createGame(numPlayers),
    numPlayers,
    // board: Board,
    debug: true,
  });
}

export default createClient;
