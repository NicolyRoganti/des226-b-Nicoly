const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número para começarmos: ", (entrada) => {
  let numero = parseInt(entrada);

  if (numero % 2 === 0) {
    console.log("O número é Par.");
  } else {
    console.log("O número é Ímpar.");
  }

  if (numero > 0) {
    console.log("O número é Positivo.");
  } else {
    if (numero < 0) {
      console.log("O número é Negativo.");
    } else {
      console.log("O número é Zero.");
    }
  }

  rl.close();
});
