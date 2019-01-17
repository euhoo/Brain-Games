import { game, makeRandomNumber } from '..';

const ruleOfProgression = 'What number is missing in the progression?';
const makeRowOfNumbers = (min, step) => {
  const arr = [];
  arr[0] = min;
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + step;
  }
  return arr;
};

const logicOfProgression = () => { // задать здесь входные данные-мин число и шаг прогрессии
  const firstElement = makeRandomNumber(1, 10);
  const step = makeRandomNumber(1, 15);
  const numbersRow = makeRowOfNumbers(firstElement, step);
  const indexOfRandomArrElement = makeRandomNumber(0, 9);
  const correctAnswer = numbersRow[indexOfRandomArrElement];
  numbersRow[indexOfRandomArrElement] = '..';
  let question = '';
  for (let count = 0; count < 10; count += 1) {
    question += numbersRow[count];
    question += ' ';
  }
  const arr = [question, correctAnswer];
  return arr;
};
const progression = () => game(logicOfProgression, ruleOfProgression);
export default progression;
