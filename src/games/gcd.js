import { game, makeRandomNumber } from '..';

const ruleOfGcd = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivision = (a, b) => {
  let min = a;
  let max = b;
  let result = 0;
  if (min > max) [min, max] = [max, min];
  for (let i = max; i > 0; i -= 1) {
    if ((max % i === 0) && (min % i === 0)) {
      result = i;
      break;
    }
  }
  return result;
};
const logicOfGcd = () => {
  const firstNumber = makeRandomNumber(1, 25);
  const secondNumber = makeRandomNumber(1, 25);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = findGreatestCommonDivision(firstNumber, secondNumber);
  const arr = [question, correctAnswer];
  return arr;
};
const gcd = () => game(logicOfGcd, ruleOfGcd);
export default gcd;
