// comentário em linha
/*
Comentários em bloco
*/
//escreve mensagem no console
console.log('Bem vindo ao starter!');

console.log('Estudando variáveis... no console');
console.log('Declarando variáveis:');
console.log('Usando "var" e "let"');
console.log('Temos a função var1var antes do bloco: ', var1var)

{ 
      var var1var = 'variável global var1var' 
      const const_const = 'constante global const_const';
      let let_let = 'variável let';
      console.log('Temos a função const_const antes do bloco: ', let_let);  
      console.log('Temos a função const_const depois do bloco: ', const_const); 
} 
 console.log('Temos a função var1var depois do bloco: ', var1var); // Caelum 

// declaração de variável
var name;
var numero
//assigment ou atribuição
name = 'carlos';
numero = 3
// tipo de variável
console.log(typeof name, name);
console.log(typeof numero, numero)

// agrupamento de declarações
let age, isHuman
age = 17
isHuman = true
console.log(typeof age, age, ' "e" ', typeof isHuman, isHuman)

//interpolando valores com template literals or template strings
console.log(`testes de uso do age ${age} com interpolação`)
console.log('testes de uso do isHuman ${isHuman} com interpolação')

//objeto
const pessoa = {
  nome: 'filho',
  idade: '30',
  altura: '88.6',
  isAdmin: true
}
//usando dados do objeto
console.log(pessoa.nome)
console.log(`meu ${pessoa.nome} tem ${pessoa.idade} com ${pessoa.altura} metros.`)

//array
const animais = [
  'leão',
  'macaco',
  'gato',
  {
    name: 'teste',
    tempo: 3
  }
]
// acessando valores
console.log(animais[1])
console.log(animais[3].name, animais[3].tempo)

//exercícios
let weight
console.log(typeof weight)

let nick = 'teste'
let type = 3
let stars = 2.5
let isSubscribed = true
let student = {
  use:'texto',
  form:2,
  single:0.5,
  visivel:true,
}
console.log(nick, type, stars, isSubscribed)
console.log(typeof student)
console.log(student)
console.log(`o ${student.use} de número ${student.form} tem ${student.single} chances de ser ${student.visivel}`)
novo = [
  student,
]
console.log(novo[0])
let maisum = {
  cais: 'um',
  valor: 3,
  tipo: 32.54,
  formato: false,
}
novo[1] = maisum
console.log('acrescentando valores em array')
console.log(novo)






