
import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
// import { Pepper } from '../../../logic/src/index';

type Cells = Array<string | null>

interface GameState {
    cells: Cells
}

export const TicTacToe = {
    setup: () => ({ cells: Array(9).fill(null) }),
    moves: {
        clickCell: (G: GameState, ctx: Ctx, id: number) => {
            if (G.cells[id] !== null) {
                return INVALID_MOVE;
              }
            G.cells[id] = ctx.currentPlayer;
        }
    },
    turn: {
        minMoves: 1,
        maxMoves: 1,
    },
    endIf: (G: GameState, ctx: Ctx) => {
        if (IsVictory(G.cells)) {
          return { winner: ctx.currentPlayer };
        }
        if (IsDraw(G.cells)) {
          return { draw: true };
        }
    },
}

// Return true if `cells` is in a winning configuration.
function IsVictory(cells: Cells) {
    const positions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
  
    const isRowComplete = (row: number[]) => {
      const symbols = row.map(i => cells[i]);
      return symbols.every(i => i !== null && i === symbols[0]);
    };
  
    return positions.map(isRowComplete).some(i => i === true);
  }
  
  // Return true if all `cells` are occupied.
  function IsDraw(cells: Cells) {
    return cells.filter(c => c === null).length === 0;
  }
