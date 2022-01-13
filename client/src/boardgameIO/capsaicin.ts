
import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
import {
    TimeOfDay,
    Plaque,
} from './types'
type Cells = Array<any>

interface GameState {
    cells: Cells
    timeOfDay: TimeOfDay
    availablePlaques: Plaque[]
}

export const Capsaicin = {
    setup: (ctx: Ctx) => ({
        cells: ["This should be the actual game board"],
        timeOfDay: TimeOfDay.MORNING,
    }),
    phases: {
        setup: {
            start: true,

        }
    }
}