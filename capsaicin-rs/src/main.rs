#![feature(int_abs_diff)]
use std::collections::{HashMap, HashSet};

#[derive(Debug, Clone, Copy, Hash, PartialEq, Eq)]
enum Pepper {
  Red,
  Blue,
  Yellow,
  Green,
  Orange,
  Purple,
  Brown,
  White,
  Black,
  Ghost
}

#[derive(Debug, Clone, Copy, Hash, PartialEq, Eq)]
enum Player {
  Red,
  Blue,
  Yellow,
  Green,
  Orange,
  Purple
}

#[derive(Debug, Clone, Copy, Hash, PartialEq, Eq)]
struct Point {
    x: usize,
    y: usize,
}

#[derive(Debug, Clone, Copy, Hash, PartialEq, Eq)]
enum PointRole {
    Harvest,
    Plant,
    Path
}

impl Point {
    pub fn new(x: usize, y: usize) -> Self {
        Point {
            x,
            y,
        }
    }

    pub fn role(self) -> PointRole {
        if self.x_even() && self.y_even() {
            PointRole::Path
        } else if self.x_even() || self.y_even() {
            PointRole::Harvest
        } else {
            PointRole::Plant
        }
    }

    pub fn x_even(self) -> bool {
        self.x % 2 == 0
    }
    pub fn y_even(self) -> bool {
        self.y % 2 == 0
    }
    pub fn point_between(self, b: Point) -> Option<Point> {
        if self.role() != PointRole::Harvest || b.role() != PointRole::Harvest {
            return None;
        }
        if self.x.abs_diff(b.x) > 1 || self.y.abs_diff(b.y) > 1 {
            return None;
        }
        if self.x_even() && b.y_even() {
            Some(Point::new(self.x, b.y))
        } else if self.y_even() && b.x_even() {
            Some(Point::new(b.x, self.y))
        } else {
            None
        }
    }
}

#[derive(Debug, Clone, Copy, Hash, PartialEq, Eq)]
enum PatchItem {
    Pepper(Pepper),
    Player(Player),
    None,
}

#[derive(Debug, Clone, Copy, Hash, PartialEq, Eq)]
enum BonusAction {
    ExtraPlanting,
    ExtraMove,
    TurnAround,
}

struct HarvestMove {
    path: Vec<Point>,
    player: Player,
    bonus_actions: Vec<BonusAction>,
}

impl HarvestMove {
    pub fn max_length(&self) -> usize {
        if self.bonus_actions.contains(&BonusAction::ExtraMove) {
            4
        } else {
            3
        }
    }
}

struct PepperPatch {
    w: usize,
    h: usize,
    grid: Vec<PatchItem>,
    players: HashMap<Player, Point>,
}

impl PepperPatch {
    pub fn new(w: usize, h: usize) -> Self {

        Self {
            grid: vec![PatchItem::None; w * h],
            players: HashMap::new(),
            w,
            h,
        }
    }
    pub fn item(&self, p: Point) -> PatchItem {
        self.grid[p.x * self.h + p.y]
    }
    pub fn get_pepper(&self, p: Point) -> Option<Pepper> {
        match self.item(p) {
            PatchItem::Pepper(pep) => Some(pep),
            _ => None,
        }
    }

    pub fn get_player(&self, p: Point) -> Option<Player> {
        match self.item(p) {
            PatchItem::Player(pep) => Some(pep),
            _ => None,
        }
    }

    pub fn valid_harvest(&self, harvest: HarvestMove) -> Result<(), String> {
        if harvest.path.len() > harvest.max_length() {
            return Err(format!("Harvest path too long: is {}, max {}", harvest.path.len(), harvest.max_length()));
        }
        if !self.players.contains_key(&harvest.player) {
            return Err(format!("Invalid player {:?}", harvest.player));
        }
        let mut point = *self.players.get(&harvest.player).unwrap();
        if point != harvest.path[0] {
            return Err(format!("Player not on starting point {:?}, instead on {:?}", harvest.path[0], point))
        }
        let mut visited = Vec::new();
        for &next_point in harvest.path.iter().skip(1) {
            if let Some(path_part) = point.point_between(next_point) {
                if visited.contains(&path_part) {
                    return Err(format!("Point already visited in path {:?}", path_part));
                }
                visited.push(path_part);
            } else {
                return Err(format!("No path between points {:?} {:?}", point, next_point));
            }

            if let Some(blocker) = self.get_player(next_point) {
                return Err(format!("Point is blocked by {:?}", blocker));
            }

            point = next_point;
        }

        return Ok(());
    }
}

#[derive(Debug, Clone, Hash, PartialEq, Eq)]
enum MarketOrderReward {
    Peppers(Vec<Pepper>),
    Points(usize),
    Coins(usize),
    Choice(Pepper, Pepper),
}

struct MarketOrder {
    requirements: Vec<Pepper>,
    rewards: Vec<MarketOrderReward>,
}

struct Recipe {
    ingredients: Vec<Pepper>,
    points: usize,
}

#[derive(Debug, Clone, Copy, Hash, PartialEq, Eq)]
enum TurnPhase {
    Bidding,
    AuctionSelection,
    Planting,
    Harvesting,
    Market,
    Recipes,
    Selling,
}

#[derive(Debug, Clone, Hash, PartialEq, Eq)]
struct AuctionItem(Vec<Pepper>);

#[derive(Debug, Clone, Copy, Hash, PartialEq, Eq)]
pub enum PlaqueCriteria {
    AnySecondary,
    Black,
    White,
    Brown,
    Ghost,
}

fn new_plaques() -> HashMap<PlaqueCriteria, Vec<usize>> {
    let mut plaques = HashMap::new();
    plaques.insert(PlaqueCriteria::AnySecondary, vec![2, 2, 2]);
    plaques.insert(PlaqueCriteria::Brown, vec![3, 4, 5]);
    plaques.insert(PlaqueCriteria::Black, vec![6, 9]);
    plaques.insert(PlaqueCriteria::White, vec![5, 7]);
    plaques.insert(PlaqueCriteria::Ghost, vec![8, 12]);

    plaques
}

struct PepperGame {
    patch: PepperPatch,
    players: Vec<Player>,
    turn: usize,
    phase: TurnPhase,
    market: Vec<MarketOrder>,
    cookoff: Vec<Recipe>,
    bonuses: HashSet<(Player, BonusAction)>,
    auction: Vec<AuctionItem>,
    plaques: HashMap<Pepper, Vec<usize>>,
}

impl PepperGame {
    pub fn new(players: Vec<Player>) -> Self {
        let mut plaques = new_plaques();
        if players.len() <= 3 {
            // TODO: remove most valuable one of each plaque
        }
        Self {
            patch: PepperPatch::new(20, 14),
            players,
            turn: 0,
            phase: TurnPhase::AuctionSelection,
            // TODO: populate market/cookoff/auction right
            market: Vec::new(),
            cookoff: Vec::new(),
            bonuses: HashSet::new(),
            plaques: HashMap::new(),
            auction: Vec::new(),
        }
    }
}

fn main() {
    println!("Hello, world!");
}
