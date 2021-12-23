const calculateDamage = (value, character, enemy) => {
  if (character.getLevel() - enemy.getLevel() >= 5) {
    return value * 1.5;
  }

  if (enemy.getLevel() - character.getLevel() >= 5) {
    return value * 0.5;
  }

  return value;
};

export { calculateDamage };
