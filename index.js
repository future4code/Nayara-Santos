//isso é um comentário

/*
Isso é um bloco
de notas

*/

//1°Exercício 
//a) O que vai ser impresso no console?
//R:Vai ser impresso os números 10 e 50, pois 5*2=10 e 5*10=50. 
//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2)
//e minhaFuncao(10)?O que apareceria no console?
//R: Iria dar erro ou apareceria undefined.


//2° Exercício 
//a) Explique o que essa função faz e qual é sua utilidade.
//R: Ela é utilizada para executar textos dando os comandos true e false.
//b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i. Eu gosto de cenoura
//ii. CENOURA é bom pra vista
//iii. Cenouras crescem na terra
//R: i.R: True, true e false.

//1° Exercício de escrita de código

 function imprimirfrase(frase) {
 console.log(frase.length)
console.log(frase.toUppeCase)
}
imprimirfrase("Eu sou Nayara, tenho 18 anos, moro em São Paulo, sou estudante")


//2°Exercício

function somarArea(numero1, numero2) {
    const area = numero1 + numero2
console.log(area)
}


function imprimirMensagemMaiuscula(mensagem) {
    console.log("Tamanho da mensagem", mensagem.length)
    console.log(mensagem.toUpperCase())
}
imprimirMensagemMaiuscula("")


//3°Exercício

const numero1 = Number(prompt("informe o primeiro número:"))
const numero2 = Number(prompt("informe o segundo numero"))
function somar (numero1, numero2) {
const soma = numero1 + numero2
    return soma
}

function subtracao (numero1, numero2) {
const diferenca = numero1 - numero2
    return diferenca 
}

function multiplicacao (numero1, numero2) {
const multiplicar = numero1 * numero2
 return multiplicar
}

function dividir (numero1, numero2) {
const divisao = numero1 / numero2
  return divisao 
}

console.log("Os numeros inseridos são", numero1, "e", numero2)
console.log("Soma:", somar)
console.log("Diferenca:", subtracao)
console.log("Multiplicacao:", multiplicacao) 
console.log("Divisao:", dividir)






























