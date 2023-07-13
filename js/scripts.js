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

function Player(name, score, dieRoll, turn) {
    this.name = name,
    this.score = score,
    this.dieRoll = dieRoll,
    this.turn = turn,
}

const dieRoller = function () {
    return Math.floor(Math.random() * 6);
}

function rollOptions() {
    let dieRoll = dieRoller();
    if (dieRoll > 1) {
        console.log("working")
    }
}


window.addEventListener("load", function (dieRoller) {
    const playBtn = document.getElementById("play-btn");
    const rollBtn = document.getElementById("roll-btn");
    rollBtn.setAttribute("class", "hidden");
    const holdBtn = document.getElementById("hold-btn");
    holdBtn.setAttribute("class", "hidden");
    let dieRoller = dieRoller();
    playBtn.addEventListener("click", function (dieRoller) {
        if (dieRoller !== 1) {
            rollBtn.removeAttribute("class");
            rollBtn.setAttribute("class", "btn btn-primary");
            holdBtn.removeAttribute("class");
            holdBtn.setAttribute("class", "btn btn-warning");
     }
    })
})

