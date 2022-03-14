import * as GameTypes from './types';

export interface GameState {
    cells: any[]
    timeOfDay: GameTypes.TimeOfDay
    availablePlaques: GameTypes.PlaqueState
    players: GameTypes.PlayerData[]
    auctionDeck: GameTypes.AuctionCard[]
    currentPlayerIdx: number
    recipes: GameTypes.Recipe[]
    marketCards:GameTypes. MarketCard[]
    currentAuction: GameTypes.AuctionCard[]
    numPlayers: number
    playOrder: GameTypes.PlayDirection
    finalTurn: boolean
}
