import { game, makeRandomNumber } from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivision = (a, b) => {
  let min = a;
  let max = b;
  let result = 0;
  if (min > max) [min, max] = [max, min];
  for (let division = max; division > 0; division -= 1) {
    if ((max % division === 0) && (min % division === 0)) {
      result = division;
      break;
    }
  }
  return result;
};
const logic = () => {
  const firstNumber = makeRandomNumber(1, 25);
  const secondNumber = makeRandomNumber(1, 25);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = findGreatestCommonDivision(firstNumber, secondNumber);
  const arr = [question, correctAnswer];
  return arr;
};
const play = () => game(logic, rule);
export default play;
