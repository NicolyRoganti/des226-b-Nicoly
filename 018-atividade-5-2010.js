const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Digite o valor total da compra (ex: 000.00): ",
  function (entradaUsuario) {
    let valorCompra = parseFloat(entradaUsuario);

    let valorFrete = valorCompra > 150.0 ? 0.0 : 20.0;

    let totalPagar = valorCompra + valorFrete;

    console.log("Total a pagar: R$ " + totalPagar.toFixed(2));
    rl.close();
  },
);
