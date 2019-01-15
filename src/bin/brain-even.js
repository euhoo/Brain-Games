#!/usr/bin/env node
import nameRequest from '..';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
console.log();
const name = nameRequest();
console.log(`Hello, ${name}!`);
console.log();
let i = 0;
for (i; i < 3; i += 1) {
  const num = Math.round(1 + Math.random() * 10);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const isEven = n => !(n % 2);
  let secondAnswer;
  if (isEven(num) === true) secondAnswer = 'yes';
  else secondAnswer = 'no';
  let value = '';
  if ((isEven(num) === true) && (answer === 'yes')) {
    value = 'Correct!';
  } else if ((isEven(num) === false) && (answer === 'no')) {
    value = 'Correct!';
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${secondAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  console.log(value);
}
if (i === 3) {
  console.log(`Congratulations, ${name}!`);
}
