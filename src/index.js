#!/usr/bin/env node
import readlineSync from 'readline-sync';

const nameRequest = () => {
  console.log('Welcome to the Brain Games!');
  console.log();
  const name = readlineSync.question('May i have your name? ');
  return console.log(`Hello, ${name}!`);
};

export default nameRequest;
