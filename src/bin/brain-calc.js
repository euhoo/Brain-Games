#!/usr/bin/env node
import nameRequest from '..';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
console.log();
const name = nameRequest();
console.log(`Hello, ${name}!`);
console.log();
let countOfGames = 0;
for (countOfGames; countOfGames < 3; countOfGames += 1) {
  const someRandomNumber = () => Math.floor(Math.random() * 3) + 1;
  const firstNum = someRandomNumber();
  const secondNum = someRandomNumber();
  let operation;
  const choice = (symb) => {
    let result;
    switch (symb) {
      case 0:
        operation = '*';
        result = firstNum * secondNum;
        break;
      case 1:
        operation = '+';
        result = firstNum + secondNum;
        break;
      default:
        operation = '-';
        result = firstNum - secondNum;
        break;
    }
    return result;
  };
  const total = choice(someRandomNumber());
  console.log(`Question: ${firstNum}${operation}${secondNum}`);
  const answer = Number(readlineSync.question('Your answer: '));
  if (answer === total) {
    console.log('Correct!');
  } else {
    console.log(`Question: ${firstNum}${operation}${secondNum}`);
    console.log(`Your answer: ${answer}`);
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${total}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
if (countOfGames === 3) {
  console.log(`Congratulations, ${name}!`);
}
