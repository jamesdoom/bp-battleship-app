//Gameboard.test.js

const Gameboard = require('../components/Gameboard');
const Ship = require('../components/Ship');

describe('Gameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test('can place ships at specific coordinates', () => {
    gameboard.placeShip(3, ['0,0', '0,1', '0,2']);
    expect(gameboard.ships[0].coordinates).toEqual(['0,0', '0,1', '0,2']);
  });

  test('receiveAttack hits the ship at the correct coordinates', () => {
    gameboard.placeShip(3, ['1,1', '1,2', '1,3']);
    gameboard.receiveAttack(1, 2);
    expect(gameboard.ships[0].hits).toBe(1);
  });

  test('receiveAttack records missed shots', () => {
    gameboard.receiveAttack(4, 4);
    expect(gameboard.missedAttacks).toContain('4,4');
  });

  test('allShipsSunk returns false when not all ships are sunk', () => {
    gameboard.placeShip(3, ['2,2', '2,3', '2,4']);
    expect(gameboard.allShipsSunk()).toBe(false);
  });

  test('allShipsSunk returns true when all ships are sunk', () => {
    gameboard.placeShip(1, ['3,3']);
    gameboard.receiveAttack(3, 3);
    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
