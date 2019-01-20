import readlineSync from 'readline-sync';
import askName from './games/brain-games';

const totalNumberOfGames = 3;

export default (logicOfGame, ruleOfGame) => {
  // получаю функцию,описывающую логику игры и текстовое правило игры для вывода юзеру
  const name = askName();
  console.log(ruleOfGame);
  console.log();
  for (let currentNumOfGame = 0; currentNumOfGame < totalNumberOfGames; currentNumOfGame += 1) {
    const [question, correctAnswer] = logicOfGame();
    // первое значение-вопрос(числовое значение(я)),второе-результат

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
