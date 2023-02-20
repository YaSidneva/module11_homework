import { getPercents } from "./code.js";

describe("testing getPercents with different values", () => {
  it("should operate correctly with positive values", () => {
    expect(getPercents(10, 10)).toBe(1),
      expect(getPercents(10, 100)).toBe(10),
      expect(getPercents(1, 50)).toBe(0.5);
  }),
    it("should operate correctly with negative values", () => {
      expect(getPercents(-10, 10)).toBe("Необходимы положительные значения"),
        expect(getPercents(10, -100)).toBe("Необходимы положительные значения"),
        expect(getPercents(-1, -50)).toBe("Необходимы положительные значения");
    }),
    it("should operate correctly with another type of variable", () => {
      expect(getPercents("g", 10)).toBe("Данные не корректны"),
        expect(getPercents(10, null)).toBe("Данные не корректны"),
        expect(getPercents(true, "b")).toBe("Данные не корректны");
    }),
    it("should operate correctly with value = 0", () => {
      expect(getPercents(0, 10)).toBe(0),
        expect(getPercents(10, 0)).toBe(0),
        expect(getPercents(0, 0)).toBe(0);
    });
});
