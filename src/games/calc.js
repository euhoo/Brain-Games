import {
  askName, welcome, makeRandomNumber, ifIncorrect,
} from '..';
import readlineSync from 'readline-sync';


const gameCalc = () => {
  welcome();
  const name = askName();
  console.log('What is the result of the expression?');
  console.log();
  // used in: calc
  const makeOperand = (numberOfOperand) => {
    let operation;
    switch (numberOfOperand) {
      case 0:
        operation = '*';
        break;
      case 1:
        operation = '+';
        break;
      default:
        operation = '-';
        break;
    }
    return operation;
  };

  const calculateSum = (operand, fNum, sNum) => {
    let result;
    switch (operand) {
      case '*':
        result = fNum * sNum;
        break;
      case '+':
        result = fNum + sNum;
        break;
      default:
        result = fNum - sNum;
        break;
    }
    return result;
  };
  for (let i = 0; i < 3; i += 1) {
    const firstNum = makeRandomNumber(1, 10); // random from 1 to 10 to make game more simpliest
    const secondNum = makeRandomNumber(1, 10); // random from 1 to 10 to make game more simpliest
    const operand = makeOperand(makeRandomNumber(0, 3));
    const resultOfOperation = calculateSum(operand, firstNum, secondNum);
    console.log(`Question: ${firstNum}${operand}${secondNum}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === resultOfOperation) {
      console.log('Correct!');
    } else {
      const ifLose = () => {
        console.log(`Question: ${firstNum}${operand}${secondNum}`);
        console.log(`Your answer: ${userAnswer}`);
        ifIncorrect(userAnswer, resultOfOperation, name);
      };
      return ifLose();
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default gameCalc();
