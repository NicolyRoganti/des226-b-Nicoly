const entrada = require("prompt-sync")();

let numero;
let soma = 0;
let quantidade = 0;

do {
  numero = parseFloat(entrada("Digite um número real (ou 0 para encerrar): "));

  if (Number.isNaN(numero)) {
    console.log("Valor inválido! Digite apenas números reais.");
    continue;
  }

  if (numero === 0) {
    break;
  }

  soma += numero;
  quantidade++;
} while (true);

console.log("\nResultado final:");
console.log(`1. Total somado: ${soma}`);
console.log(`2. Quantidade de números válidos somados: ${quantidade}`);

entrada("\nPressione ENTER para encerrar o programa!");
