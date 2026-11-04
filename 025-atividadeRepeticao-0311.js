const entrada = require("prompt-sync")();

let contador = parseInt(entrada("Digite um número para iniciar a contagem: "));

for (let n = contador; n >= 0; n--) {
  console.log(n);
}

entrada("Decolagem autorizada. Pressione ENTER para encerrar o programa!");
