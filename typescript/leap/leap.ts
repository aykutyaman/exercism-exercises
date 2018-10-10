const evenlyDivisibleBy = (x: number, y: number): Boolean => (x % y === 0)
const notEvenlyDivisibleBy = (x: number, y: number): Boolean => !evenlyDivisibleBy(x, y)

const isLeapYear = (year: number): Boolean => (
  evenlyDivisibleBy(year, 4)
  && notEvenlyDivisibleBy(year, 100)
  || evenlyDivisibleBy(year, 400)
)

export default isLeapYear
