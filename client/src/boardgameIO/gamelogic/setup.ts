import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
import { emit } from 'process';

enum TimeOfDay {
    'MORNING',
    'AFTERNOON',
}
interface CapsaicinGame {
    timeOfDay: TimeOfDay,
}
export const Capsaicin = {
    setup: () => ({
        timeOfDay: 'MORNING'
    })
}
