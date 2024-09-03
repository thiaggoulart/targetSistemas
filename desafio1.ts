import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isFibonacci(num: number): string {
  var first: number = 0;
  var second: number = 1;
  var nextNumber: number = first + second;

  if (num === first || num === second) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  }

  while (nextNumber <= num) {

    if (nextNumber === num) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    first = second;
    first = nextNumber;
    nextNumber = first + second;
  }

  return `O número ${num} não pertence à sequência de Fibonacci.`;
}

rl.question('Digite um número: ', (answer) => {
  const num = parseInt(answer);

  if (typeof(num) !== "number") {
    console.log('Por favor, insira um número válido.');
  } else {
    console.log(isFibonacci(num));
  }

  rl.close();
});