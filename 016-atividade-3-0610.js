const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validarNota(nota) {
  if (nota >= 7) {
    return "Aprovado";
  } else if (nota >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

rl.question("Digite a nota do aluno: ", function (notaInput) {
  let entradaNota = parseFloat(notaInput);

  if (isNaN(entradaNota) || entradaNota < 0 || entradaNota > 10) {
    console.log("Nota inválida! Informe uma nota entre 0 e 10.");
    rl.close();
    return;
  }

  let resultado = validarNota(entradaNota);
  console.log(`O aluno está ${resultado}.`);
  rl.close();
});
