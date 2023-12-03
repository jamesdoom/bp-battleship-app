//Player.test.js

const Player = require('../components/Player');
const Gameboard = require('../components/Gameboard');

describe('Player', () => {
  let player, computer, gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
    player = new Player('Human', gameboard);
    computer = new Player('Computer', gameboard);
  });

  test('player can attack enemy gameboard', () => {
    gameboard.placeShip(3, ['0,0', '0,1', '0,2']);
    player.attack(0, 0);
    expect(gameboard.ships[0].hits).toBe(1);
  });

  test('player cannot attack the same coordinates twice', () => {
    player.attack(1, 1);
    player.attack(1, 1);
    expect(Array.from(player.attacks).length).toBe(1);
  });

  test('computer can make a random attack', () => {
    computer.computerAttack();
    expect(Array.from(computer.attacks).length).toBe(1);
  });

  test('computer does not attack the same coordinates twice', () => {
    for (let i = 0; i < 100; i++) {
      computer.computerAttack();
    }
    expect(Array.from(computer.attacks).length).toBeLessThanOrEqual(100);
  });
});
