import { Player, PlayerColor, PlaqueColor, Pepper, PlaqueState, Plaque, PepperColor, BonusAction, GameState, TimeOfDay, AuctionCard } from '../types'

function shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

const generateAllPlayers = (numPlayers: number): Player[] => {
    if (numPlayers < 1 || numPlayers > 6) {
        throw new Error("You cant play with this amount of players")
    }
    const allPlayerColors = shuffle(["Red", "Blue", "Yellow", "Green", "Orange", "Purple"]) as PlayerColor[]
    const playas = []
    for (let i = 0; i < numPlayers; i++) {
        playas.push(genPlayer(allPlayerColors[i]));
    }
    return shuffle(playas);
}

const generateAllPlaques = (numPlayers: number): PlaqueState => {
    const plaqueNumColors = {"Secondary": 3, "Brown": 3, "Black": 2, "White": 2, "Ghost": 2} as {[key: string]: number}

    const pointValues = {
        "Brown": [5,4,3],
        "Black": [9,6],
        "Ghost": [12,10],
        "Secondary": [2,2,2],
        "White": [7,5],
    } as { [key: string]: number[] }

    const state = {} as PlaqueState
    for (const color in plaqueNumColors) {
        for (let i = 0; i < plaqueNumColors[color]; i++) {
            if (!state[color]) state[color] = []
            state[color].push({
                kind: 'plaque',
                pointValue: pointValues[color][i],
                color: color as PlaqueColor,
            } as Plaque)
        }

    }
    if (numPlayers < 4) {
        for (const color in plaqueNumColors) {

        }
    }
    return state

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

export const generateAuctionDeck = (time: TimeOfDay): AuctionCard[] => {
    //TODO: add logic for generating the afternoonDeck
    return genMorningAuctionDeck();
}

const genMorningAuctionDeck = (): AuctionCard[] => {
    const primaries = [PepperColor.Red, PepperColor.Blue, PepperColor.Yellow];
    const variations = [PepperColor.Red, PepperColor.Blue, PepperColor.Yellow, PepperColor.Red, PepperColor.Blue, PepperColor.Yellow, PepperColor.Orange, PepperColor.Green, PepperColor.Purple] as PepperColor[]
    // TODO: import the is Primary/Secondary Methods
    const time = TimeOfDay.MORNING
    const kind = "auctionCard"
    const cards = [] as AuctionCard[]
    variations.forEach(color => {

        cards.push({
            time,
            kind,
            peppers: [color]
        });
        if (primaries.some(el => el === color)) {
            primaries.forEach(col => {
                cards.push({
                    kind,
                    time,
                    peppers: [color, col]
                })
            })
        }
    })
    return cards;
}

export const gameSetup = (numPlayers: number): GameState => ({
    timeOfDay: TimeOfDay.MORNING,
    players: generateAllPlayers(numPlayers),
    availablePlaques: generateAllPlaques(numPlayers),
    auctionDeck: genMorningAuctionDeck(),
    currentPlayerIdx: 0,
    cells: ["GAME BOARD GOES HERE"],
})