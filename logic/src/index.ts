
// export type PepperColorType = "Red"|"Blue"|"Yellow"|"Green"|"Orange"|"Purple"|"Brown"|"White"|"Black"|"Ghost";
type PlayerColor = "Red"|"Blue"|"Yellow"|"Green"|"Orange"|"Purple";
type Role = "Path"|"Harvest"|"Plant";
type BonusAction = "ExtraPlant"|"ExtraMove"|"TurnAround";

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

function isEven(n: number): boolean {
  return n % 2 == 0;
}

function absDiff(x: number, y: number): number {
  return Math.abs(x - y);
}

export interface Pepper {
  kind: 'pepper',
  color: PepperColor;
}

interface Player {
  kind: 'player',
  color: PlayerColor;
}

/*
 * A point on the game grid.  There are three kinds of points - path, harvest, and plant
 */
interface Point {
  x: number;
  y: number;
}

function pointEq(a: Point, b: Point) {
  return a.x === b.x && a.y === b.y;
}

function pointRole(point: Point): Role {
  if (isEven(point.x) && isEven(point.y)) {
    return 'Path';
  } else if (isEven(point.x) || isEven(point.y)) {
    return 'Harvest';
  } else {
    return 'Plant';
  }
}

function pointString(point: Point) {
  return `${pointRole(point)}: ${point.x}, ${point.y}`;
}

/*
  * Find the path point between two harvest points
  * @throws
  */

function pathBetween(point: Point, other: Point): Point {
  if (pointRole(point) !== 'Harvest' || pointRole(other) !== 'Harvest') {
    throw new Error(`Both points need to be harvest points: ${pointString(point)} ${pointString(other)}`);
  } else if (absDiff(point.x, other.x) > 1 || absDiff(point.y, other.y) > 1) {
    throw new Error(`Points not close enough`);
  }
  if (isEven(point.x) && isEven(other.y)) {
    return createSome({ x: this.x, y: other.y });
  } else if (isEven(this.y) && isEven(this.x)) {
    return { x: other.x, y: this.y };
  } else {
    throw new Error('Unpathable points');
  }
}

type PatchItem = Pepper|Player|null;



export interface PepperPatch {
  grid: PatchItem[];
  w: number;
  h: number;
  players: { [ key: string ]: Point };
}

interface HarvestMove {
  path: Point[];
  player: Player;
  bonus_actions: BonusAction[];
}

function createPepperPatch(w = 21, h = 15) {
  let grid: PatchItem[] = [];
  for (let i = 0; i < w * h; i++) {
    grid.push(null);
  }
}

function pointToGrid(patch: PepperPatch, point: Point) {
  if (point.x >= patch.w || point.y >= patch.h || point.x < 0 || point.y < 0) {
    throw new Error(`Point out of bounds ${pointString(point)}`);
  }
  return point.x + point.y * patch.w;
}

function getPepper(patch: PepperPatch, point: Point) {
  if (pointRole(point) !== 'Plant') {
    throw new Error(`getPepper called on a non-planting point ${pointString(point)}`)
  }
  return patch.grid[pointToGrid(patch, point)];
}

function getPlayer(patch: PepperPatch, point: Point) {
  if (pointRole(point) !== 'Harvest') {
    throw new Error(`getPlayer called on a non-harvest point ${pointString(point)}`)
  }
  return patch.grid[pointToGrid(patch, point)];
}

function maxMoveLength(move: HarvestMove) {
  if (move.bonus_actions.includes('ExtraMove')) {
    return 4;
  } else {
    return 3;
  }
}
// TODO: add hypothetical yield calcs to the valid functions
function validHarvest(patch: PepperPatch, move: HarvestMove) {
  try {
    if (move.path.length > maxMoveLength(move)) {
      throw new Error(`Harvest path too long!`);
    } else if (!patch.players[move.player.color]) {
      throw new Error(`Invalid player ${move.player.color}`);
    }
    let point = patch.players[move.player.color];
    if (!pointEq(point, move.path[0])) {
      throw new Error('Player not on starting point of move');
    }
    let visited = [];
    for (let next of move.path.slice(1)) {
      let pathPart = pathBetween(point, next);
      if (pathPart == null) {
        throw new Error(`No path from ${pointString(point)} to ${pointString(next)}`);
      } else if (visited.find(p => pointEq(pathPart, p))) {
        if (move.bonus_actions.includes("TurnAround")) {
          move.bonus_actions = move.bonus_actions.filter(ba => ba !== "TurnAround");
        } else {
          throw new Error(`Cannot double back at ${pointString(point)}`);
        }
      }
      let blocker = getPlayer(patch, next);
      if (blocker) {
        throw new Error(`Player ${blocker.color} is blocking the way`);
      }
      point = next;
    }
    return valid();
  } catch (e) {
    return err(e.message);
  }
}
function validPlant(patch: PepperPatch, pepper: Pepper, point: Point) {
  try {
    let occupied = getPepper(patch, point);
    if (occupied) {
      throw new Error(`Cannot plant on space occupied by ${occupied.color}`);
    }
    let neighbor = false;
    try {
      for (let x of [-2, 2]) {
        for (let y of [-2, 2]) {
          if (getPepper(patch, { x, y })) {
            neighbor = true;
          }
        }
      }
      // ignore because these should just be out of bounds points
    } catch (e) {}
    if (!neighbor) {
      throw new Error(`Cannot plant without a neighbor`);
    }
    return valid();
  } catch (e) {
    return err(e.message);
  }
}

function valid(): Validity {
  return {
    valid: true
  };
}

function err(message: string): Validity {
  return {
    valid: false,
    message
  };
}

interface Validity {
  valid: boolean;
  message?: string;
  harvest?: Pepper[];
}
