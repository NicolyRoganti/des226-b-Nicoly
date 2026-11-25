let objeto = {}; // declaração de objeto vazio
let pessoa = {
  nome: "Patolino",
  profissao: "Pato",
  idade: 89,
  trabalha: true,
}; // declaração de objeto com atributos

let funcionarios = {
  nome: "John Doe",
  cargo: "Desenvolvedor",
  salario: 6852.22,
  endereco: {
    rua: "Brasil",
    numero: 10,
    bairro: "Centro",
    cidade: "Tupã",
  }, // exemplo de objetos com atributos dentro de outros atributos.
};

console.log(`Tipo variavel objeto vazio: ${typeof objeto}`); // todo objeto, com atributos ou não será identificado como object.
console.log(`Tipo variavel objeto vazio: ${typeof pessoa}`);
console.log(pessoa); // consulta o objeto, com todos os atributos.
console.log(`Nome da pessoa cadastrada: ${pessoa.nome}`); // visualizar um atributo do objeto
console.log(`Endereço do funcionário ${funcionarios.endereco.cidade}`); // visualizar um atributo aninhado
