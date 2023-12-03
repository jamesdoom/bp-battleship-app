// Game.test.js

const Game = require('../components/Game');
const Player = require('../components/Player');
const Gameboard = require('../components/Gameboard');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game('Player1', 'Player2');
    // Setup ships for testing
    game.player1.gameboard.placeShip(2, ['0,0', '0,1']);
    game.player2.gameboard.placeShip(2, ['0,0', '0,1']);
  });

  test('game initializes with two players', () => {
    expect(game.player1).toBeInstanceOf(Player);
    expect(game.player2).toBeInstanceOf(Player);
  });

  test('players take turns attacking', () => {
    game.playTurn(0, 0);
    expect(game.player1.gameboard.ships[0].hits).toBe(1);
    game.playTurn(0, 0); // Switches to player 2
    expect(game.player2.gameboard.ships[0].hits).toBe(1);
  });

  test('game ends when all ships of a player are sunk', () => {
    game.playTurn(0, 0);
    game.playTurn(0, 0);
    game.playTurn(0, 1);
    game.playTurn(0, 1);
    expect(game.isGameOver()).toBe(true);
  });

  test('identifies the winner correctly', () => {
    game.playTurn(0, 0); // Player 1 attacks
    game.playTurn(0, 0); // Player 2 attacks
    game.playTurn(0, 1); // Player 1 attacks
    expect(game.playTurn(0, 1)).toMatch('Player2 wins!'); // Player 2 attacks and wins
});

});
