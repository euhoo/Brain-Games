
import game from '..';
import makeRandomNumber from '../utils';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  const smallestPrime = 2;
  if (question < smallestPrime) {
    return false;
  }
  for (let i = smallestPrime; i <= Math.floor(Math.sqrt(question)); i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

const logic = () => {
  const question = makeRandomNumber(1, 99);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => game(logic, rule);
