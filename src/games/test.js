#!/usr/bin/env node
import {
  askName, welcome, makeRandomNumber, ifIncorrect,
} from '..';

const firstNum = makeRandomNumber(1, 25); // random from 1 to 10 to make game more simpliest
const secondNum = makeRandomNumber(1, 25); // random from 1 to 10 to make game more simpliest

const findGreatestCommonDivision = (a, b) => {
  let min = a;
  let max = b;
  let greatestCommonDivision = 0;
  if (min > max) [min, max] = [max, min];
  for (let i = max; i > 0; i -= 1) {
    if ((max % i === 0) && (min % i === 0)) {
      greatestCommonDivision = i;
      break;
    }
  }
  return greatestCommonDivision;
};
console.log(findGreatestCommonDivision(firstNum, secondNum));
