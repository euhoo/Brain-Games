import game from '..';
import makeRandomNumber from '../utils';

const rule = ('What is the result of the expression?');

const calculateSum = (numberOfOperand, fNum, sNum) => {
  let operation;
  let result;
  switch (numberOfOperand) {
    case 0:
      operation = '*';
      result = fNum * sNum;
      break;
    case 1:
      operation = '+';
      result = fNum + sNum;
      break;
    default:
      operation = '-';
      result = fNum - sNum;
      break;
  }
  result = String(result);
  return [result, operation];
};

const logic = () => {
  const firstNumber = makeRandomNumber(1, 25);
  const secondNumber = makeRandomNumber(1, 25);
  const operand = makeRandomNumber(0, 3);
  const [correctAnswer, operation] = calculateSum(operand, firstNumber, secondNumber);
  const question = `${firstNumber}${operation}${secondNumber}`;
  return [question, correctAnswer];
};
export default () => game(logic, rule);
