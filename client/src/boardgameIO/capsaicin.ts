import { Ctx } from 'boardgame.io';
// import { INVALID_MOVE } from 'boardgame.io/core';
import {
    GameState,
} from './types'
// import { PepperPatch } from 'logic'
import {
    gameSetup
} from './utils/setupMethods'


export const Capsaicin = () => {
    return {
        name: 'Capsaicin',
        setup: (): GameState  => (gameSetup(4)),
        moves: {
            testMove: (G: GameState, ctx: Ctx) => {
              console.log({G, ctx});
            }
          },
    }
}
