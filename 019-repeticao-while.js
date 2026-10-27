const entrada = require("prompt-sync")();

let contador = 0;
while (contador < 10) {
  // enquanto a variavel contador for menor ou igual a 10
  contador = contador + 1;
  console.log(contador); // Exibe ao usuário a variável no terminal
} // while fica em repetição até que a variável seja maior que 10 nesse caso

entrada("Pressione ENTER para encerrar o programa!");
