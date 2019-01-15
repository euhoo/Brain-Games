#!/usr/bin/env node
import readlineSync from 'readline-sync';

const nameRequest = () => {
  console.log('Welcome to the Brain Games!');
  console.log();
  const name = readlineSync.question('May i have your name? ');
  const text = `Hello, ${name}!`;
  return text;
};

export default nameRequest;
