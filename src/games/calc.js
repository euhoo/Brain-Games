import {
  game,
  makeRandomNumber,
} from '..';

const rule = ('What is the result of the expression?');
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

const logic = () => {
  const firstNumber = makeRandomNumber(1, 25);
  const secondNumber = makeRandomNumber(1, 25);
  const operand = makeOperand(makeRandomNumber(0, 3));
  const question = `${firstNumber}${operand}${secondNumber}`;
  const correctAnswer = calculateSum(operand, firstNumber, secondNumber);
  const arr = [question, correctAnswer];
  return arr;
};
const play = () => game(logic, rule);
export default play;
