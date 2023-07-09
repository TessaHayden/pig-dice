// function Player() {
//     this.turn = false;
//     this.score = {};
//     this.roll = {};
//     this.currentId = 0;
// }

// Player.prototype.addPlayer = function (player) {
//     player.id = this.assignId();
// };
// Player.prototype.assignId = function () {
//     this.currentId += 1;
//     return this.currentId;
// };

// Player.prototype.currentPlayer = function (turn) {
//     if (player.turn === "yes") {
//         console.log("true");
//     }
//     return false;
// };

//Hardcoded players to be deleted
let player1 = {
    turn: true,
}
let player2 = {
    turn: false,
}
const numPlayerArr = [];

numPlayerArr.push(player1, player2);

if (numPlayerArr.length > 0) {
    console.log(numPlayerArr.length)
};



