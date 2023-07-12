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

function Player(name, score, dieRoll) {
    this.name = name,
    this.score = score,
    this.dieRoll = dieRoll
}

const dieRoller = function () {
    Math.floor(Math.random() * 6);
}


window.addEventListener("load", function () {
    const playBtn = document.getElementById("play-btn");
    
})