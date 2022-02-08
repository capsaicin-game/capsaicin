export interface GameState {
    cells: any[]
    timeOfDay: TimeOfDay
    availablePlaques: PlaqueState
    players: Player[]
    auctionDeck: AuctionCard[]
    currentPlayerIdx: number
    recipes: Recipe[]
    marketCards: MarketCard[]
}
export interface PlaqueState {
    [key: string]: Plaque[]
}
export enum PepperColor {
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Orange",
    "Purple",
    "Brown",
    "White",
    "Black",
    "Ghost",
}

export enum TimeOfDay {
    "MORNING",
    "AFTERNOON"
}
export enum BonusAction {
    "ExtraPlant",
    "ExtraMove",
    "TurnAround",
}
export type PlayerColor = "Red"|"Blue"|"Yellow"|"Green"|"Orange"|"Purple"
export type Role = "Path"|"Harvest"|"Plant"
export type PlaqueColor = "Secondary"|"Brown"|"Black"|"White"|"Ghost"

export interface Pepper {
    kind: 'pepper'
    color: PepperColor
}
export type Ingredients = {
    [key in PepperColor]: number;
}

export interface Recipe {
    kind: 'recipe'
    ingredients: Ingredients
    pointValue: number
    name: string
}

export interface Plaque {
    kind: 'plaque'
    pointValue: number
    color: PlaqueColor
}
export interface MarketCard {
    kind: 'marketCard'
    time: TimeOfDay
    pointValue: number
    rewards: Ingredients
    peppersRequired: Ingredients
    moneyReward: number
}
export interface AuctionCard {
    kind: 'auctionCard'
    time: TimeOfDay
    peppers: PepperColor[]
}
export interface Player {
    kind: 'player'
    color: PlayerColor
    peppers: Pepper[]
    score: number
    money: number
    actions: BonusAction[]
    recipiesCompleted: Recipe[]
    plaques: Plaque[]
    marketCards: MarketCard[]
}

export interface Point {
    x: number
    y: number
}
  