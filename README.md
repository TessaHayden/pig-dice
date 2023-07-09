### So how do you play Pig?
* Choose a player to go first. That player throws a die and scores as many points as the total shown on the die providing the die doesn’t roll a 1. The player may continue rolling and accumulating points (but risk rolling a 1) or end his turn.

* If the player rolls a 1 his turn is over, he loses all points he accumulated that turn, and he passes the die to the next player.

* Play passes from player to player until a winner is determined.

### How do you win?
The first player to accumulate 100 or more points wins the game.

===

 What will happen when a user clicks "Play"?:
- It will display a button to start rolling the die.

What objects will you need?:
- player object (each player will need a player object instance created for it)
- die object
- score object

What key-value pairs will each object need to contain in order for the game to work?
- player object will require:
1. turn = false;
2. score = {};
3. roll = {}
4. id = currentId;

- The die object will require:
1. die value : randomNum() (a random number 1-6);

- The score object will require:
1. current score: currentScore;
2. die roll : randomNum();
3. new score : currentScore + dieRoll;
4. goal score : 100 points

What functions?
- function to create new player
- function to determine number of players
- function to pick first player
- function to switch players after player turn
- function to roll die
- function to keep track of score
- function to add up score
- function to determine if the goal has been met
- function to end game
- function to reset game
- function to display results

How will these be triggered throughout the gameplay?
> The events will be triggered through button clicks

How will information be collected from the user? How will it be displayed?
> Information will be collected with the score object and displayed in a div

Describe currentPlayer();

Test: "It should determine if a player is rolling."
Code: 
if (player === "yes"){}
Expected Output: yes

Test: "It should test to see if there is more than one player."
Code:
const numPlayersArr = [];
let player1 {true};
let player2 {false};

Test: "It should determine which player is rolling if there is more than one player."
Code: 
player1 {true};
player2 {false}

Expected Output: player1