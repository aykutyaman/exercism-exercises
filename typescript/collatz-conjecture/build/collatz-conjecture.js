"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nextStep = (n) => ((n % 2 === 0)
    ? n / 2
    : n * 3 + 1);
const valid = (n) => {
    if (n <= 0)
        throw 'Only positive numbers are allowed';
    return true;
};
const steps = (n, acc = 0) => (valid(n) && (n === 1)
    ? acc
    : steps(nextStep(n), acc + 1));
exports.default = {
    steps
};
//# sourceMappingURL=collatz-conjecture.js.map