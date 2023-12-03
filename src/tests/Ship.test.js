//Ship.test.js

const Ship = require('../components/Ship');

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3); // Example length of 3
  });

  test('hits are recorded correctly', () => {
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test('ship is not sunk initially', () => {
    expect(ship.isSunk()).toBe(false);
  });

  test('ship sinks after enough hits', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('extra hits do not change sunk status', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit(); // Extra hit
    expect(ship.isSunk()).toBe(true);
  });
});
