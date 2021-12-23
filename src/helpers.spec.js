import { Character } from "./character";
import { calculateDamage } from "./helpers";

test("should deal unmodified damage to same level characters", () => {
  expect(
    calculateDamage(
      100,
      new Character({ level: 1 }),
      new Character({ level: 1 })
    )
  ).toBe(100);
});

test("should deal less damage to higher level characters", () => {
  expect(
    calculateDamage(
      100,
      new Character({ level: 1 }),
      new Character({ level: 6 })
    )
  ).toBe(50);
});

test("should deal more damage to lower level characters", () => {
  expect(
    calculateDamage(
      100,
      new Character({ level: 6 }),
      new Character({ level: 1 })
    )
  ).toBe(150);
});
