import { game, makeRandomNumber } from '..';

const evenRule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => (number % 2 === 0);
const logicEven = () => {
  const question = makeRandomNumber(1, 10);
  const correctAnswer = (isEven(question) === true) ? 'yes' : 'no';
  const arr = [question, correctAnswer];
  return arr;
};
const even = () => {
  game(logicEven, evenRule);
};
export default even;
