"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const evenlyDivisibleBy = (x, y) => (x % y === 0);
const notEvenlyDivisibleBy = (x, y) => !evenlyDivisibleBy(x, y);
const isLeapYear = (year) => (evenlyDivisibleBy(year, 4)
    && notEvenlyDivisibleBy(year, 100)
    || evenlyDivisibleBy(year, 400));
exports.default = isLeapYear;
//# sourceMappingURL=leap.js.map