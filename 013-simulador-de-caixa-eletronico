const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const user1Login = "nicoly";
const user1Senha = "12345";
const user1Saldo = 500.0;

const user2Login = "lais";
const user2Senha = "abcde";
const user2Saldo = 1200.0;

const user3Login = "pamela";
const user3Senha = "98765";
const user3Saldo = 0.0;
console.log(
  "Bem vindo ao NickBank! O simulador de caixa eletronico mais legal dessa ETEC!",
);

rl.question("Informe o seu usuario: ", (loginDigitado) => {
  rl.question("Informe a sua senha: ", (senhaDigitada) => {
    const loginLower = loginDigitado.toLowerCase();

    let usOk = false;
    let snOk = false;
    let saldoDisponivel = 0;
    let nomeUsuario = "";

    if (loginLower === user1Login.toLowerCase()) {
      usOk = true;
      if (senhaDigitada === user1Senha) {
        snOk = true;
        saldoDisponivel = user1Saldo;
        nomeUsuario = user1Login;
      }
    } else {
      if (loginLower === user2Login.toLowerCase()) {
        usOk = true;
        if (senhaDigitada === user2Senha) {
          snOk = true;
          saldoDisponivel = user2Saldo;
          nomeUsuario = user2Login;
        }
      } else {
        if (loginLower === user3Login.toLowerCase()) {
          usOk = true;
          if (senhaDigitada === user3Senha) {
            snOk = true;
            saldoDisponivel = user3Saldo;
            nomeUsuario = user3Login;
          }
        }
      }
    }

    const acessoPermitido = usOk && snOk;

    if (!acessoPermitido) {
      console.log("\nAcesso negado! Usuario ou senha incorretos.");
      rl.close();
    } else {
      console.log(`\nAcesso permitido! Bem-vindo(a), ${nomeUsuario}.`);
      console.log(`Seu saldo atual e: R$ ${saldoDisponivel.toFixed(2)}`);

      rl.question("Qual valor voce deseja sacar? R$ ", (valorSaqueTexto) => {
        const valorSaque = parseInt(valorSaqueTexto, 10);

        if (isNaN(valorSaque)) {
          console.log("Valor invalido para saque.");
        } else {
          if (valorSaque <= 0) {
            console.log("Valor invalido. Digite um valor maior que zero.");
          } else {
            if (valorSaque > saldoDisponivel) {
              console.log("Saldo insuficiente para realizar esta operacao.");
            } else {
              saldoDisponivel = saldoDisponivel - valorSaque;

              console.log(`\nSaque realizado com sucesso!`);
              console.log(`Seu novo saldo e: R$ ${saldoDisponivel.toFixed(2)}`);

              let restante = valorSaque;

              let notas50 = 0;
              if (restante >= 50) {
                notas50 = Math.floor(restante / 50);
                restante = restante % 50;
              }

              let notas20 = 0;
              if (restante >= 20) {
                notas20 = Math.floor(restante / 20);
                restante = restante % 20;
              }

              let notas10 = 0;
              if (restante >= 10) {
                notas10 = Math.floor(restante / 10);
                restante = restante % 10;
              }

              let notas5 = 0;
              if (restante >= 5) {
                notas5 = Math.floor(restante / 5);
                restante = restante % 5;
              }
              let notas2 = 0;
              if (restante >= 2) {
                notas2 = Math.floor(restante / 2);
                restante = restante % 2;
              }

              console.log("\n--- Detalhes do Saque ---");
              console.log(`Notas de R$ 50: ${notas50}`);
              console.log(`Notas de R$ 20: ${notas20}`);
              console.log(`Notas de R$ 10: ${notas10}`);
              console.log(`Notas de R$ 5:  ${notas5}`);
              console.log(`Notas de R$ 2:  ${notas2}`);
              console.log(`Valor restante em moedas: R$ ${restante}`);
            }
          }
        }
        rl.close();
      });
    }
  });
});
