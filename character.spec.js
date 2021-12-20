import { Character } from "./src/character";

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

  character.damage(enemyCharacter);

  expect(enemyCharacter.health).toBe(999);
});
