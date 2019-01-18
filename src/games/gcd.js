import game from '..';
import makeRandomNumber from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivision = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let result = 0;
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
  const meansOfFunction = [question, correctAnswer];
  return meansOfFunction;
};
export default () => game(logic, rule);
