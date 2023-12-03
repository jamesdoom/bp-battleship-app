// Game.js

const Player = require('./Player');
const Gameboard = require('./Gameboard');

class Game {
    constructor(player1Name, player2Name) {
        this.player1 = new Player(player1Name, new Gameboard());
        this.player2 = new Player(player2Name, new Gameboard());
        this.currentPlayer = this.player1;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }

    playTurn(x, y) {
        const targetBoard = this.currentPlayer === this.player1 ? this.player2.gameboard : this.player1.gameboard;
        this.currentPlayer.attack(x, y, targetBoard);
        if (targetBoard.allShipsSunk()) {
            return `${this.currentPlayer.name} wins!`;
        }
        this.switchPlayer();
    }

    isGameOver() {
        return this.player1.gameboard.allShipsSunk() || this.player2.gameboard.allShipsSunk();
    }
}

module.exports = Game;
