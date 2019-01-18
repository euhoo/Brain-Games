import { game, makeRandomNumber } from '..';

const rule = 'What number is missing in the progression?';
const countOfGames = 10;

const makeRowOfNumbers = (min, step, indexOfCorrectanswer) => {
  let question = '';
  for (let count = 0; count < countOfGames; count += 1) {
    question += (min + step * count === min + (step * indexOfCorrectanswer)) ? '.. ' : `${min + step * count} `;
  }
  return question;
};

const logic = () => {
  const firstElement = makeRandomNumber(1, 10);
  const step = makeRandomNumber(1, 15);
  const indexOfCorrectAnswer = makeRandomNumber(0, 9);
  const correctAnswer = firstElement + (step * indexOfCorrectAnswer);
  const question = makeRowOfNumbers(firstElement, step, indexOfCorrectAnswer);
  const meansOfFunction = [question, correctAnswer];
  return meansOfFunction;
};

export default () => game(logic, rule);
