import {
  askName, welcome, makeRandomNumber, ifIncorrect,
} from '..';
import readlineSync from 'readline-sync';

const gcd = () => {
  const findGreatestCommonDivision = (a, b) => {
    let min = a;
    let max = b;
    let result = 0;
    if (min > max) [min, max] = [max, min];
    for (let i = max; i > 0; i -= 1) {
      if ((max % i === 0) && (min % i === 0)) {
        result = i;
        break;
      }
    }
    return result;
  };

  welcome();
  const name = askName();
  console.log('Find the greatest common divisor of given numbers.');
  console.log();

  for (let i = 0; i < 3; i += 1) {
    const firstNum = makeRandomNumber(1, 25); // random from 1 to 25 to make game more simpliest
    const secondNum = makeRandomNumber(1, 25); // random from 1 to 25 to make game more simpliest
    console.log(`Question: ${firstNum} ${secondNum}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    const resultOfOperation = findGreatestCommonDivision(firstNum, secondNum);

    if (userAnswer === resultOfOperation) {
      console.log('Correct!');
    } else {
      return ifIncorrect(userAnswer, resultOfOperation, name);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default gcd;
