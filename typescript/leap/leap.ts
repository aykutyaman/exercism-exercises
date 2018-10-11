const evenlyDivisibleBy = (x: number, y: number): boolean => (x % y === 0)
const notEvenlyDivisibleBy = (x: number, y: number): boolean => !evenlyDivisibleBy(x, y)

const isLeapYear = (year: number): boolean => (
  evenlyDivisibleBy(year, 4)
  && notEvenlyDivisibleBy(year, 100)
  || evenlyDivisibleBy(year, 400)
)

export default isLeapYear
