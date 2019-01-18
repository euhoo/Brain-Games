
import game from '..';
import makeRandomNumber from '../utils';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const smallestPrime = 2;
const notPrime = 1;

const isPrime = (question) => {
  let correctAnswer = 'yes';
  if (question === notPrime) {
    correctAnswer = 'no';
    return correctAnswer;
  }
  for (let i = question - 1; i > smallestPrime - 1; i -= 1) {
    if (question % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }
  return correctAnswer;
};

const logic = () => {
  const question = makeRandomNumber(1, 3);
  const correctAnswer = isPrime(question);
  const means = [question, correctAnswer];
  return means;
};
export default () => game(logic, rule);
