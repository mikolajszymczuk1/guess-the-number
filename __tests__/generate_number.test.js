import { generate_number as gn } from "../js/functions";

describe("Generate number function", () => {
    test("Should return number in range from min to max", () => {
        expect(gn(1, 1)).toEqual(1);
        expect(gn(-10, -10)).toEqual(-10);
        expect(1 <= gn(1, 100) <= 100).toEqual(true);
    });
});
