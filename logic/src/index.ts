type PepperColor = "Red"|"Blue"|"Yellow"|"Green"|"Orange"|"Purple"|"Brown"|"White"|"Black"|"Ghost";
type PlayerColor = "Red"|"Blue"|"Yellow"|"Green"|"Orange"|"Purple";
type Role = "Path"|"Harvest"|"Plant";
type BonusAction = "ExtraPlant"|"ExtraMove"|"TurnAround";

function isEven(n: number): boolean {
  return n % 2 == 0;
}

function absDiff(x: number, y: number): number {
  return Math.abs(x - y);
}

interface Pepper {
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
function pathBetween(point: Point, other: Point): Point|null {
  if (pointRole(point) !== 'Harvest' || pointRole(other) !== 'Harvest') {
    throw new Error(`Both points need to be harvest points: ${pointString(point)} ${pointString(other)}`);
  } else if (absDiff(point.x, other.x) > 1 || absDiff(point.y, other.y) > 1) {
    return null;
  }
  if (isEven(point.x) && isEven(other.y)) {
    return { x: this.x, y: other.y };
  } else if (isEven(this.y) && isEven(this.x)) {
    return { x: other.x, y: this.y };
  } else {
    return null;
  }
}

type PatchItem = Pepper|Player|null;



interface PepperPatch {
  grid: PatchItem[];
  w: number;
  h: number;
  players: { [ key: PlayerColor ]: Point };
}

interface HarvestMove {
  path: Point[];
  player: Player;
  bonus_actions: BonusAction[];
}

function createPepperPatch(w = 20, h = 14) {
  let grid = [];
  for (let i = 0; i < w * h; i++) {
    grid.push(null);
  }
}

function pointToGrid(patch: PepperPatch, point: Point) {
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
function validHarvest(patch: PepperPatch, move: HarvestMove) {
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
    if (!pathPart) {
      throw new Error(`No path from ${pointString(point)} to ${pointString(next)}`);
    }
    if (visited.find(p => pointEq(pathPart, p))) {
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
}

