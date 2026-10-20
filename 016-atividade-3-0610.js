const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validarNota(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function validarEntrada(nota) {
  return !isNaN(nota) && nota >= 0 && nota <= 10;
}

rl.question("Digite a 1ª nota do aluno: ", function (nota1Input) {
  let nota1 = parseFloat(nota1Input);

  if (!validarEntrada(nota1)) {
    console.log("Nota inválida! Informe uma nota entre 0 e 10.");
    rl.close();
    return;
  }

  rl.question("Digite a 2ª nota do aluno: ", function (nota2Input) {
    let nota2 = parseFloat(nota2Input);

    if (!validarEntrada(nota2)) {
      console.log("Nota inválida! Informe uma nota entre 0 e 10.");
      rl.close();
      return;
    }

    rl.question("Digite a 3ª nota do aluno: ", function (nota3Input) {
      let nota3 = parseFloat(nota3Input);

      if (!validarEntrada(nota3)) {
        console.log("Nota inválida! Informe uma nota entre 0 e 10.");
        rl.close();
        return;
      }

      let media = calcularMedia(nota1, nota2, nota3);
      let resultado = validarNota(media);

      console.log(`A média do aluno é ${media.toFixed(2)}.`);
      console.log(`O aluno está ${resultado}.`);
      rl.close();
    });
  });
});
