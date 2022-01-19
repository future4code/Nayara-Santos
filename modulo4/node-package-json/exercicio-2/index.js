//npm run start Nayara ("node ./index.js")

console.log(process.argv[0]) 
console.log(process.argv[1])
console.log(process.argv[2])
console.log(process.argv[3])

const primeiroNumero = Number(process.argv[2])
const segundoNumero = Number(process.argv[3])

const soma = primeiroNumero + segundoNumero
console.log(soma)

