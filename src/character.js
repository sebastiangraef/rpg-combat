import { calculateDamage } from "./helpers";

class Character {
  static STARTING_HEALTH = 1000;
  static STARTING_LEVEL = 1;

  constructor({
    health = Character.STARTING_HEALTH,
    level = Character.STARTING_LEVEL,
  } = {}) {
    this.health = health;
    this.level = level;
  }

  getHealth() {
    return this.health;
  }

  getLevel() {
    return this.level;
  }

  damage(target, damage) {
    const damageToDeal = calculateDamage(damage, this, target);

    if (target !== this) {
      target.receiveDamage(damageToDeal);
    }
  }

  receiveDamage(damage) {
    if (damage >= this.health) {
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
