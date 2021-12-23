import { calculateDamage } from "./helpers";

test("should deal less damage to higher level characters", () => {
  expect(calculateDamage(0)).toBe(0);
});
