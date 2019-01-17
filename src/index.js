#!/usr/bin/env node
import readlineSync from 'readline-sync';

// used in all games
export const welcome = () => console.log('Welcome to the Brain Games!');
export const nameRequest = () => {
  const name = readlineSync.question('May i have your name? ');
  const text = `${name}!`;
  return text;
};
export const askName = () => {
  const name = nameRequest();
  console.log(`Hello, ${name}!`);
  console.log();
  return name;
};

// used in: even
export const isEven = number => (number % 2 === 0);

// used in: even,calc
export const makeCorrectAnswer = (question) => {
  const correct = (isEven(question) === true) ? 'yes' : 'no';
  return correct;
};

// used in: even,calc
export const ifIncorrect = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
};

// used in: even, cals
export const makeRandomNumber = (min, max) => Math.round(min + Math.random() * max);
