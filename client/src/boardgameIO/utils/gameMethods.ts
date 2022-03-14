import { Ctx } from 'boardgame.io'
import { GameState } from '../models'
import { PlayDirection } from '../models/types'

export const nextPlayer = (G: GameState, ctx: Ctx) => {
    if (G.playOrder === PlayDirection.FORWARDS) {
        if (G.currentPlayerIdx + 1 > G.numPlayers - 1) {
            // end current phase.
        }
        G.currentPlayerIdx = Math.min(G.currentPlayerIdx + 1, G.numPlayers - 1)
    } else {
        if (G.currentPlayerIdx - 1 < 0) {
            // end current phase.
        }
        G.currentPlayerIdx = Math.max(G.currentPlayerIdx - 1, 0)
    }
}
 