import game from '..';
import makeRandomNumber from '../utils';

const rule = 'What number is missing in the progression?';
const countOfGames = 10;

const makeRowOfNumbers = (min, step, indexOfCorrectAnswer) => {
  let question = ''; // сразу обозначаю,что это строка
  for (let count = 0; count < countOfGames; count += 1) {
    question += (min + step * count === min + (step * indexOfCorrectAnswer)) ? '.. ' : `${min + step * count} `;
  }
  return question;
};

const logic = () => {
  const firstElement = makeRandomNumber(1, 10);
  const step = makeRandomNumber(1, 15);
  const indexOfCorrectAnswer = makeRandomNumber(0, 9);
  const correctAnswer = firstElement + (step * indexOfCorrectAnswer);
  const question = makeRowOfNumbers(firstElement, step, indexOfCorrectAnswer);
  const means = [question, correctAnswer];
  return means;
};
export default () => game(logic, rule);
