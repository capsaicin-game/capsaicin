import { Player, PlayerColor, Pepper, PepperColor, BonusAction } from '../types'

export const generateAllPlayers = (numPlayers: number): Player[] => {
    if (numPlayers < 1 || numPlayers > 6) {
        throw new Error("You cant play with this amount of players")
    }
    const allPlayerColors = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"] as PlayerColor[];
    const playas = []
    for (let i = 0; i < numPlayers; i++) {
        playas.push(genPlayer(allPlayerColors[i]));
    }
    return playas
}

const genPlayer = (color: PlayerColor): Player => {
    
    const startingPeppers = [
        { kind: 'pepper', color: PepperColor.Red },
        { kind: 'pepper', color: PepperColor.Blue },
        { kind: 'pepper', color: PepperColor.Yellow },
    ]

    const startingActions = [BonusAction.ExtraMove, BonusAction.ExtraPlant, BonusAction.TurnAround]

    return {
        kind: 'player',
        color,
        peppers: startingPeppers as Pepper[],
        score: 0,
        money: 10,
        plaques: [],
        actions: startingActions,
        recipiesCompleted: [],
        marketCards: [],
    }
}
