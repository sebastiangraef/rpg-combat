class Character {
  constructor() {
    this.health = 1000;
    this.level = 1;
  }

  damage(target) {
    target.health = target.health - 1;
  }
}

export { Character };
