
// import { INVALID_MOVE } from 'boardgame.io/core';
import {
    GameState,
} from './types'
import { PepperPatch } from 'logic'
import {
    gameSetup, generateAllPlayers
} from './utils/setupMethods'


export const createGame = (numPlayers: number) => {
    return {
        name: 'Capsaicin',
        setup: (): GameState  => (gameSetup(numPlayers)),
        phases: {
            auction: {
                moves: {

                }
            },
            planting: {

            },
            harvest: {

            },
            fulfillment: {

            }
        }
    }
}
