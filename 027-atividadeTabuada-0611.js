const entrada = require("prompt-sync")();

let numero1 = parseInt(entrada("Digite o primeiro número inteiro: "));
let numero2 = parseInt(entrada("Digite o segundo número inteiro: "));

if (isNaN(numero1) || isNaN(numero2)) {
  console.log("Por favor, digite números válidos.");
} else {
  let inicio = Math.min(numero1, numero2);
  let fim = Math.max(numero1, numero2);

  for (let numero = inicio; numero <= fim; numero++) {
    console.log(`##### TABUADA DO ${numero} #####`);

    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
}

entrada("\nPressione ENTER para encerrar o programa!");
