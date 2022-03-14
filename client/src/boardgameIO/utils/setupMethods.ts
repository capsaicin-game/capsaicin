
import { ALL_RECIPES } from './recipiesConfig'
import { MARKET_CARDS } from './marketConfig'
import {
    PlayerData,
    PlayerColor,
    PlaqueColor,
    PlaqueState,
    Plaque,
    PepperColor,
    BonusAction,
    TimeOfDay,
    AuctionCard,
    Recipe,
    MarketCard,
    PlayDirection,
} from '../models/types'

import { GameState } from '../models'
function shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]]
    }
    return array;
}

const generateAllPlayers = (numPlayers: number): PlayerData[] => {
    if (numPlayers < 1 || numPlayers > 6) {
        throw new Error("You cant play with this amount of players")
    }
    const allPlayerColors = shuffle(["Red", "Blue", "Yellow", "Green", "Orange", "Purple"]) as PlayerColor[]
    const playas = []
    for (let i = 0; i < numPlayers; i++) {
        playas.push(genPlayer(allPlayerColors[i]))
    }
    return shuffle(playas)
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
            state[color] = state[color].slice(1)
        }
    }
    return state

}

const genPlayer = (color: PlayerColor): PlayerData => {
    
    const peppers = {
        [PepperColor.Red]: 1,
        [PepperColor.Blue]: 1,
        [PepperColor.Yellow]: 1,
        [PepperColor.Black]: 0,
        [PepperColor.White]: 0,
        [PepperColor.Brown]: 0,
        [PepperColor.Green]: 0,
        [PepperColor.Purple]: 0,
        [PepperColor.Orange]: 0,
        [PepperColor.Ghost]: 0,
    }

    const startingActions = [BonusAction.ExtraMove, BonusAction.ExtraPlant, BonusAction.TurnAround]

    return {
        kind: 'player',
        color,
        peppers,
        score: 0,
        money: 10,
        plaques: [],
        actions: startingActions,
        recipiesCompleted: [],
        marketCards: [],
    }
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

const genAfternoonAuctionDeck = (): AuctionCard[] => {
    const time = TimeOfDay.AFTERNOON
    const kind = "auctionCard"

    const cards = [] as AuctionCard[]
    const triple = [PepperColor.Red, PepperColor.Yellow, PepperColor.Blue]
    const secondaries = [PepperColor.Green, PepperColor.Orange, PepperColor.Purple]

    for (let i = 0; i < 4; i++) {
        cards.push({
            kind,
            time,
            peppers: [PepperColor.Black]
        })
        cards.push({
            kind,
            time,
            peppers: [PepperColor.White]
        })
    }
    for (let i = 0; i < 5; i++) {
        cards.push({
            kind,
            time,
            peppers: [...triple],
        })
    }
    for (let i = 0; i < 2; i++) {
        secondaries.forEach((color) => {
            cards.push({
                kind,
                time,
                peppers: [color]
            });
            secondaries.forEach((color2) => {
                cards.push({
                    kind,
                    time,
                    peppers: [color, color2]
                })
            })
        })
    }
    return cards
}

export const generateAuctionDeck = (time: TimeOfDay): AuctionCard[] => {
    if (time === TimeOfDay.MORNING) {
        return shuffle(genMorningAuctionDeck())
    }
    return shuffle(genAfternoonAuctionDeck())
}

const generateRecipes = (numPlayers: number): Recipe[] => {
    const numRecipes = numPlayers * 4
    const recipes = shuffle([...ALL_RECIPES])
    return recipes.slice(0, numRecipes)
}
export const generateMarketDeck = (time: TimeOfDay, numPlayers: number): MarketCard[] => {
    const marketCards = shuffle([...MARKET_CARDS[time]])
    const numOrders = 3 + (2 * numPlayers)
    return marketCards.slice(0, numOrders)
}

export const gameSetup = (numPlayers: number): GameState => {
    let auctionDeck = generateAuctionDeck(TimeOfDay.MORNING)
    const startingAuction = auctionDeck.slice(0,numPlayers)
    auctionDeck = auctionDeck.slice(numPlayers)
    const players = generateAllPlayers(numPlayers)
    return {
        timeOfDay: TimeOfDay.MORNING,
        players,
        numPlayers,
        availablePlaques: generateAllPlaques(numPlayers),
        auctionDeck,
        recipes: generateRecipes(numPlayers),
        marketCards: generateMarketDeck(TimeOfDay.MORNING, numPlayers),
        currentPlayerIdx: 0,
        cells: ["GAME BOARD GOES HERE"],
        currentAuction: startingAuction,
        playOrder: PlayDirection.FORWARDS,
        finalTurn: false,
    }
}