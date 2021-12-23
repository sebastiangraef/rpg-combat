import { Character } from "./character";

const STARTING_HEALTH = 1000;
const STARTING_LEVEL = 1;

test("should create a new Character with starting health", () => {
  const character = new Character();
  expect(character.health).toBe(STARTING_HEALTH);
});

test("should create a new Character with starting level", () => {
  const character = new Character();
  expect(character.level).toBe(STARTING_LEVEL);
});

test("should be able to deal damage", () => {
  const character = new Character();
  const enemyCharacter = new Character();

  character.damage(enemyCharacter, 1);

  expect(enemyCharacter.health).toBe(999);
});

test("should be able to die", () => {
  const character = new Character();
  const enemyCharacter = new Character();

  character.damage(enemyCharacter, 555555);

  expect(enemyCharacter.health).toBe(0);
});

test("should be able to heal when not dead", () => {
  const character = new Character();
  character.health = 999;

  character.heal();

  expect(character.health).toBe(STARTING_HEALTH);
});

test("should not be able to heal when dead", () => {
  const character = new Character();
  character.health = 0;

  character.heal();

  expect(character.health).toBe(0);
});
