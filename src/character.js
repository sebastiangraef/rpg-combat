class Character {
  static STARTING_HEALTH = 1000;
  static STARTING_LEVEL = 1;

  constructor() {
    this.health = Character.STARTING_HEALTH;
    this.level = Character.STARTING_LEVEL;
  }

  damage(target, damage) {
    target.receiveDamage(damage);
  }

  receiveDamage(damage) {
    if (damage > this.health) {
      this.health = 0;
    } else {
      this.health -= damage;
    }
  }

  heal() {
    if (this.health > 0) {
      this.health = Character.STARTING_HEALTH;
    }
  }
}

export { Character };
