// Questão 1

// var dobro = function(valor) {
//     return valor * 2
//     }
//     console.log(dobro(10))

const dobro = (valor: number) => 2 * valor;
console.log(dobro(10));

// Questão 2

// var dizerOla = function (nome) {
//   if (nome === undefined) {
//     nome = "Pessoa";
//   }
//   console.log("Ola, " + nome);
// };
// dizerOla();
// dizerOla("Anna");

const dizerOla = (nome: string = "Pessoa") => console.log(`Ola, ${nome}`);
dizerOla();
dizerOla("Anna");

// Questão 3

var nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));


// Questão 4

let notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2]

let [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

var cientista = {primeiroNome: "Will", experiencia: 12}
let {primeiroNome, experiencia} = cientista
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
console.log(primeiroNome, experiencia)