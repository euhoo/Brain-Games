#!/usr/bin/env node
import readlineSync from 'readline-sync';

const nameRequest = () => {
  const name = readlineSync.question('May i have your name? ');
  const text = `${name}!`;
  return text;
};

export default nameRequest;
