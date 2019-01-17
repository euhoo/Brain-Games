import readlineSync from 'readline-sync';

export const makeRandomNumber = (min, max) => Math.round(min + Math.random() * max);

export const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
  return name;
};

const ifIncorrect = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
};
export const game = (logicOfGame, ruleOfGame) => {
  // получаем функцию,описывающую логику игры и текстовое правило игры для вывода юзеру
  const name = askName();
  console.log(ruleOfGame);
  console.log();
  const totalNumberOfGames = 3;
  for (let currentNumOfGame = 0; currentNumOfGame < totalNumberOfGames; currentNumOfGame += 1) {
    const arr = logicOfGame();// первое значение-вопрос(числовое значение(я)),второе-результат
    const question = arr[0];
    const correctAnswer = String(arr[1]);
    console.log(`Question: ${question}`);
    const answer = String(readlineSync.question('Your answer: '));
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      return ifIncorrect(answer, correctAnswer, name);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
