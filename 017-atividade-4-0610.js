const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Digite o código do produto (A1, B2 ou C3): ",
  function (codigoProduto) {
    switch (codigoProduto.trim().toUpperCase()) {
      case "A1":
        console.log("Item: Café Expresso | Valor: R$ 5,00");
        break;

      case "B2":
        console.log("Item: Suco de Laranja | Valor: R$ 8,00");
        break;

      case "C3":
        console.log("Item: Água Mineral | Valor: R$ 4,00");
        break;

      default:
        console.log("Código inexistente. Por favor, tente novamente.");
    }

    rl.close();
  },
);
