import { game, makeRandomNumber } from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => (number % 2 === 0);

const logic = () => {
  const question = makeRandomNumber(1, 10);
  const correctAnswer = (isEven(question) === true) ? 'yes' : 'no';
  const arr = [question, correctAnswer];
  return arr;
};
const play = () => game(logic, rule);
export default play;
