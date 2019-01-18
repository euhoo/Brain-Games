import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
  return name;
};
