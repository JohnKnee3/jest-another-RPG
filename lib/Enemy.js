const Potion = require("./Potion");
// const Character = require("./Character");

class Character {
  isAlive() {
    if (this.health === 0) {
      return false;
    }
    return true;
  }

  getHealth() {
    return `${this.name}'s health is now ${this.health}!`;
  }

  getAttackValue() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
  }

  reduceHealth(health) {
    this.health -= health;

    if (this.health < 0) {
      this.health = 0;
    }
  }
}

class Enemy extends Character {
  constructor(name, weapon) {
    super();
    this.name = name;
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.weapon = weapon;
    this.potion = new Potion();
  }

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}

module.exports = Enemy;
