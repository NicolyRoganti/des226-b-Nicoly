let entrada = require("prompt-sync")();

let usuario = "klofis";
let senha = "123456";
let usOk = false;
let snOk = false;
let acessoPermitido = false;

console.log("Digite seus dados para acessar o sistema.");

let loginUsuario = entrada("Nome de usuário: ");
let loginSenha = entrada("Senha: ");

if (usuario == loginUsuario.toLowerCase()) {
  console.log("Nome de usuário verificado com sucesso!");
  usOk = true;
}

if (senha == loginSenha) {
  console.log("Senha verificada com sucesso!");
  snOk = true;
}

if (usOk == true) {
  if (snOk == true) {
    acessoPermitido = true;
  }
}

if (acessoPermitido === true) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso negado!");
}

entrada("Pressione enter para finalizar o programa!");

// toLowerCase() - converte a string para letras minúsculas
