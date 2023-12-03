//Ship.js

class Ship {
    constructor(length) {
      this.length = length;
      this.hits = 0;
      this.sunk = false;
    }
  
    hit() {
      if (this.hits < this.length) {
        this.hits++;
      }
      this.checkIfSunk();
    }
  
    isSunk() {
      return this.sunk;
    }
  
    checkIfSunk() {
      if (this.hits === this.length) {
        this.sunk = true;
      }
    }
  }
  
  module.exports = Ship;
  