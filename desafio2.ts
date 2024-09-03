import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countLetterA(string: string): void {
  const amountA = string.match(/a/gi);

  if (amountA) {
    console.log(`A letra "a" aparece ${amountA.length} vezes.`);
  } else {
    console.log('Não contém a letra "a" nesta frase.');
  }
}

rl.question('Digite uma frase para verificar a quantidade de letras "a": ', (inputString) => {
  countLetterA(inputString);
  rl.close();
});