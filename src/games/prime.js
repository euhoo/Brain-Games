
import game from '..';
import makeRandomNumber from '../utils';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const smallestPrime = 2;

const isPrime = (question) => {
  if (question < smallestPrime) {
    return 'no';
  }
  for (let i = smallestPrime; i <= Math.floor(Math.sqrt(question)); i += 1) {
    if (question % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const logic = () => {
  const question = makeRandomNumber(1, 99);
  const correctAnswer = isPrime(question);
  const means = [question, correctAnswer];
  return means;
};
export default () => game(logic, rule);
