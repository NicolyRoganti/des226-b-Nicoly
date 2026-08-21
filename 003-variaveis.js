let entrada = require("prompt-sync")();

let nome = "Nicoly"; // string ex = "Qualquer texto"
let idade = 26; // number ex = 10, 18.23
let trabalha = true; // boolean ex = true, false
let endereco = {
  rua: "Brasil",
  numero: 40,
  bairro: "Centro",
}; // object ex =  padrão chave/valor
let funcao = () => console.log("Oi"); // function ex = bloco de código

/*
comentário de 
múltiplas 
linhas
*/

// exibindo tipo das variáveis
console.log("Tipos de Variáveis");
console.log("Variavel nome: " + typeof nome);
console.log("Variavel idade: " + typeof idade);
console.log("Variavel trabalha: " + typeof trabalha);
console.log("Variavel endereco: " + typeof endereco);
console.log("Variavel funcao: " + typeof funcao);

// Variáveis definidas sem valor
let nomeDigitado;
let idadeDigitada;
let trabalhaDigitado;

console.log(); // Pula uma linha

// Passando valor para as variáveis
nomeDigitado = entrada(" Digite seu nome: ");
idadeDigitada = entrada(" Qual sua idade? ");
trabalhaDigitado = entrada(" Você trabalha? ");

// Mostrando valor e tipo das variáveis

console.log("Nome:" + nomeDigitado + " - Tipo:" + typeof nomeDigitado);
console.log("Idade:" + idadeDigitada + " - Tipo:" + typeof idadeDigitada);
console.log(
  "Trabalha:" + trabalhaDigitado + " - Tipo:" + typeof trabalhaDigitado,
);
