const nextStep = (n: number): number => (
  (n % 2 === 0)
    ? n / 2
    : n * 3 + 1
)

const valid = (n: number) => {
  if (n <= 0) throw 'Only positive numbers are allowed';
  return true;
}

const steps = (n: number, acc: number = 0): number => (
  valid(n) && (n === 1)
    ? acc
    : steps(nextStep(n), acc + 1)
)

export default {
  steps
}
