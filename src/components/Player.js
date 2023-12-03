// Player.js

class Player {
  constructor(name, gameboard) {
    this.name = name;
    this.gameboard = gameboard;
    this.attacks = new Set(); // To track already made attacks
  }

  attack(x, y) {
    if (!this.attacks.has(`${x},${y}`)) {
      this.gameboard.receiveAttack(x, y);
      this.attacks.add(`${x},${y}`);
    }
  }

  computerAttack(targetGameboard) {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10); // Assuming gameboard size 10x10
      y = Math.floor(Math.random() * 10);
    } while (this.attacks.has(`${x},${y}`));
    this.attack(x, y, targetGameboard);
  }
}

module.exports = Player;

  