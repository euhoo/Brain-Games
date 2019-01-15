#!/usr/bin/env node
import nameRequest from '..';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
console.log();
const name = nameRequest();
console.log(`Hello, ${name}!`);
console.log();
let i = 0;
for (i; i < 3; i += 1) {
  const num = () => Math.floor(Math.random() * 3) + 1;
  const firstNum = num();
  const secondNum = num();
  let m;
  const choice = (symb) => {
    let result;
    switch (symb) {
      case 0:
        m = '*';
        result = firstNum * secondNum;
        break;
      case 1:
        m = '+';
        result = firstNum + secondNum;
        break;
      default:
        m = '-';
        result = firstNum - secondNum;
        break;
    }
    return result;
  };
  const total = choice(num());
  console.log(`Question: ${firstNum}${m}${secondNum}`);
  const answer = Number(readlineSync.question('Your answer: '));
  if (answer === total) {
    console.log('Correct!');
  } else {
    console.log(`Question: ${firstNum}${m}${secondNum}`);
    console.log(`Your answer: ${answer}`);
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${total}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${name}!`);
}
