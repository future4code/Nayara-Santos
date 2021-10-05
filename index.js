//isso é um comentário

/*
Isso é um bloco
de notas

1-a)R:false
b)R:false
c)R:true
d)R:boolean

2-R:18+24=42

3-R:Ele deve primeiro escolher dois números e imprimi-los e logo depois soma-los no console.

1-a)R:18 anos
b)R:19 anos
c)R:true
d)R:-1 ano de diferença

2-a)R:Número 4
b)R:0
c)R:Numeros pares 4,6,8,10
d)R:Numero impar 3

3-a)R:6570
b)R:219
c)R:5256
*/

console.log("template-javascript")

const bool1 = true
const bool2 = false
const bool3 = !bool2 

let resultado = bool1 && bool2
console.log("a.", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b.", resultado)


resultado = !resultado && (bool1 || bool2)
console.log("c.", resultado)

console.log("d.", typeof resultado)

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(18+24)

let idadeDousuario = prompt("Qual sua idade?")
let idadedaMelhoramiga = prompt("Qual é a idade da sua melhor amiga?") 

console.log("18 anos")
console.log("19 anos")

console.log("Sua idade é maior do que a idade da sua melhor amiga?")

a=false
b=true

console.log("a.", resultado)


console.log(18-19)
 
console.log("number -1")

let numeroPar = prompt("insira um número par!")
 
const restoDaDivisao = 4 % 2 
console.log(restoDaDivisao)//2

console.log("number 4")

console.log("number 6")

console.log("number 8")

console.log("number 10")

let numeroImpar = prompt("insira um numero impar!")
console.log("numberImpar 3")

const idade = 18
const dias = ("18*365")
console.log(18*365)
const meses = (6570/30)
console.log(6570/30)
const horas = (219*24)
console.log(219*24)






 