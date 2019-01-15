#!/usr/bin/env node
import nameRequest from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
console.log();
const name = nameRequest();
console.log(name);
