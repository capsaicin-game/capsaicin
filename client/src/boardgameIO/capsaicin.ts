
// import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
import {
    TimeOfDay,
    Plaque,
    Player
} from './types'
import { generateAllPlayers } from './utils/setupMethods'

// this should be where we store the players/peppers
type Cells = Array<any>

interface GameState {
    cells: Cells
    timeOfDay: TimeOfDay
    availablePlaques: Plaque[]
    players: Player[],
    
}
export const createGame = (numPlayers: number) => {
    const players = generateAllPlayers(numPlayers)
    return {
        setup: (ctx: Ctx)  => ({
            cells: ["This should be the actual game board"],
            timeOfDay: TimeOfDay.MORNING,
            players,

        }),
        phases: {
            auction: {

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
