import { Ctx } from "boardgame.io"
import { GameState } from '../models'

export const buyLot = (G: GameState, ctx: Ctx, lotIndex: number) => {
    const currentPlayer = G.players[G.currentPlayerIdx]
    const currentAuctionCard = G.currentAuction[lotIndex]
    currentAuctionCard.peppers.forEach((color) => {
        currentPlayer.peppers[color] += 1
    })
    // remove that card from the auction

    G.currentAuction = G.currentAuction.slice(0, lotIndex).concat(G.currentAuction.slice(lotIndex + 1))

    G.auctionDeck.push(currentAuctionCard);
}

export const refreshAuctionCards = (G: GameState) => {
    if (G.currentAuction.length > 0) {
        throw new Error("Auction Cards not empty, Do not refresh deck!")
    }
    G.currentAuction = G.auctionDeck.slice(0, G.numPlayers)
    G.auctionDeck = G.auctionDeck.slice(G.numPlayers)
}