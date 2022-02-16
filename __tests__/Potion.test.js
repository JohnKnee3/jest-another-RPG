const Potion = require("../lib/Potion.js");

test("creates a health potion object", () => {
  const potion = new Potion("health");

  expect(potion.name).toBe("health");
  expect(potion.value).toEqual(expect.any(Number));
  console.log(potion.name);
  console.log(potion.value);
});
