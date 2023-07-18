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

function Player(name, turn) {
    this.name = name,
    this.turn = turn,
    this.score = 0
}

const dieRoller = function (min, max) {
    return Math.floor(Math.random() * (max-min) + min)
};

function rollOptions(player) {
    let dieNum = dieRoller(1, 6);
    if (dieNum !== 1) {
        rollBtn.removeAttribute("class");
        rollBtn.setAttribute("class", "btn btn-primary");
        holdBtn.removeAttribute("class");
        holdBtn.setAttribute("class", "btn btn-warning");
        } else if (dieNum === 1) {
            console.log("lose turn")
        }
}

function addDieRoll(player) {
    let dieNum = dieRoller(1, 6);
    let currentScore = player.score
    if (dieNum !== 1) {
        console.log(dieNum + currentScore)
    } 
}

function dispDieRoll() {
    let rollNum = dieRoller(1, 6);
    dieRoller();
    document.getElementById("player-roll").innerText = rollNum;
}


window.addEventListener("load", function (dieRoller) {
    const playBtn = document.getElementById("play-btn");
    const rollBtn = document.getElementById("roll-btn");
    rollBtn.setAttribute("class", "hidden");
    const holdBtn = document.getElementById("hold-btn");
    holdBtn.setAttribute("class", "hidden");
    playBtn.addEventListener("click", function () {
        dispDieRoll();
        rollOptions();
    })
})

