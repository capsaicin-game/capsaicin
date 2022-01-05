interactables:
auction cards
 - peppers
market cards
 - wanted (peppers)
 - rewards (peppers, points, money)
recipe cards
 - ingredients (peppers)
 - name
 - value (points)
game board and planted peppers
 - grid is 7x10 in terms of peppers
because farmers move between the peppers, we should think of the board as a 15x21 grid instead, but with three separate classes of coordinates
harvesting - one even, one odd like (1, 2) - this is the space between two pepper spots where farmers move to, and where the crossbreeding product is rewarded.
planting - both odd - this is where peppers are planted.
pathing - both even - farmers pass through between harvesting coordinates, can only pass through once a turn to prevent "doubling back".

The reward of a harvesting point can be found by looking at the planting points on either side, which are found by taking the even element of the harvesting point and checking the points with odd values nearby.  Of course some squares aren't planted or are off the grid, but that simply means there is no reward, otherwise it corresponds to the LUT provided in the rulebook.

The game starts with a random turn order, but on each subsequent turn it is established by the bidding mechanism.  Each player secretly selects an amount from their funds to bid for turn order selection, with ties being broken by the previous turn order.  Players can bid 0.

After bidding, players select the peppers available in auction they want, in turn order.  These are directly added to their inventory.

Next, players plant one pepper each in turn order, though they can plant more with the bonus action provided at the beginning of the game.  Peppers must be placed adjacent to another pepper.
