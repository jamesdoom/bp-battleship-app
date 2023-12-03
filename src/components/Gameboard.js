//Gameboard.js

const Ship = require('./Ship');

class Gameboard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(length, coordinates) {
    const newShip = new Ship(length);
    newShip.coordinates = coordinates;
    this.ships.push(newShip);
  }

  receiveAttack(x, y) {
    let hitShip = this.ships.find(ship => ship.coordinates.includes(`${x},${y}`));

    if (hitShip) {
      hitShip.hit();
    } else {
      this.missedAttacks.push(`${x},${y}`);
    }
  }

  allShipsSunk() {
    return this.ships.every(ship => ship.isSunk());
  }
}

module.exports = Gameboard;
