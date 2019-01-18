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
  const means = [result, operation];
  return means;
};

const logic = () => {
  const firstNumber = makeRandomNumber(1, 25);
  const secondNumber = makeRandomNumber(1, 25);
  const operand = makeRandomNumber(0, 3);
  const means = calculateSum(operand, firstNumber, secondNumber);
  const operation = means[1];
  const question = `${firstNumber}${operation}${secondNumber}`;
  const correctAnswer = means[0];
  const meansOfFunction = [question, correctAnswer];
  return meansOfFunction;
};
export default () => game(logic, rule);
