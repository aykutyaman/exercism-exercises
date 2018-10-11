"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collatz_conjecture_1 = require("./collatz-conjecture");
describe('CollatzConjecture', () => {
    it('zero steps for one', () => {
        const expected = 0;
        expect(collatz_conjecture_1.default.steps(1)).toBe(expected);
    });
    it('divide if even', () => {
        const expected = 4;
        expect(collatz_conjecture_1.default.steps(16)).toBe(expected);
    });
    it('even and odd steps', () => {
        const expected = 9;
        expect(collatz_conjecture_1.default.steps(12)).toBe(expected);
    });
    it('Large number of even and odd steps', () => {
        const expected = 152;
        expect(collatz_conjecture_1.default.steps(1000000)).toBe(expected);
    });
    it('zero is an error', () => {
        const expected = 'Only positive numbers are allowed';
        expect(() => { collatz_conjecture_1.default.steps(0); }).toThrowError(expected);
    });
    it('negative value is an error', () => {
        const expected = 'Only positive numbers are allowed';
        expect(() => { collatz_conjecture_1.default.steps(-15); }).toThrowError(expected);
    });
});
//# sourceMappingURL=collatz-conjecture.test.js.map