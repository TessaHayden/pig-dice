function GameObj() {
    this.players = {},
    this.scores = {},
    this.currentId = 0
}

GameObj.prototype.addPlayer = function (player) {
    player.id = this.assignId();
    this.players[player.id] = player;
};

GameObj.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

function Player(name) {
    this.name = name,
    this.score = 0,
    this.dieRoll = 0,
}

Player.prototype.dieRoller = function () {
   return Math.floor(Math.random() * 6); 
}

Player.prototype.playerTurn = function (player) {
    
}

function Score(player1Score, player2Score) {
    this.player1Score = player1Score,
    this.player2Score = player2Score
}


