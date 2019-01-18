import { game, makeRandomNumber } from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const smallestPrime = 1;

const isPrime = (question) => {
  let correctAnswer = 'yes';
  for (let i = question - 1; i > smallestPrime; i -= 1) {
    if (question < 4) break;
    else if (question % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }
  return correctAnswer;
};

const logic = () => {
  const question = makeRandomNumber(1, 99);
  const correctAnswer = isPrime(question);
  const means = [question, correctAnswer];
  return means;
};
export default () => game(logic, rule);
