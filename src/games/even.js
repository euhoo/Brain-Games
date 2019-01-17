#!/usr/bin/env node
import {
  askName, welcome, makeRandomNumber, makeCorrectAnswer, ifIncorrect,
} from '..';
import readlineSync from 'readline-sync';


const even = () => {
  welcome();
  const name = askName();
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log();
  for (let i = 0; i < 3; i += 1) {
    const question = makeRandomNumber(1, 10);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = makeCorrectAnswer(question);
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      return ifIncorrect(answer, correctAnswer, name);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default even;
