const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validarAcesso(idade, acompanhado, bloqueado) {
  const pessoaNaoBloqueada = !bloqueado;

  if (bloqueado === true) {
    return "Acesso Bloqueado";
  }

  if (
    pessoaNaoBloqueada &&
    (idade >= 18 || (idade < 18 && acompanhado === true))
  ) {
    return "Acesso Liberado";
  } else {
    return "Acesso Negado";
  }
}
rl.question("Qual é a idade da pessoa? ", function (idadeInput) {
  let entradaIdade = parseInt(idadeInput);

  rl.question(
    "A pessoa está acompanhada? (sim/nao) ",
    function (acompanhadoInput) {
      let respostaAcompanhado = acompanhadoInput.toLowerCase().trim();
      let estaAcompanhado =
        respostaAcompanhado === "sim" || respostaAcompanhado === "s";

      rl.question(
        "A pessoa está bloqueada no sistema? (sim/nao) ",
        function (bloqueadoInput) {
          let respostaBloqueado = bloqueadoInput.toLowerCase().trim();
          let estaBloqueado =
            respostaBloqueado === "sim" || respostaBloqueado === "s";

          let resultado = validarAcesso(
            entradaIdade,
            estaAcompanhado,
            estaBloqueado,
          );
          console.log("\nResultado da verificação: " + resultado);
          rl.close();
        },
      );
    },
  );
});
