import game from '..';
import makeRandomNumber from '../utils';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const smallestPrime = 2;

const isPrime = (question) => {
  let correctAnswer = 'no';
  if (question === 2 || question === 3) {
    correctAnswer = 'yes';
    return correctAnswer;
  }
  for (let division = question - 1; division > smallestPrime; division -= 1) {
    if (question % division === 0) {
      correctAnswer = 'no';
      return correctAnswer;
    }
  }
  return correctAnswer;
};

const logic = () => {
  const question = makeRandomNumber(1, 37);
  const correctAnswer = isPrime(question);
  const means = [question, correctAnswer];
  return means;
};
export default () => game(logic, rule);
