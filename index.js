// Exercício 1°
// A)O que vai ser impresso no console?
//R: Será impresso duas pessoas do elenco e um canal com o horario da transmissao.

// Exercício 2°
//A)O que vai ser impresso no console?
//R: Vai ser impresso o nome do cachorro, do gato e da tartaruga.Com a idade e a raça.
//B)O que faz a sintaxe dos tres pontos antes do nome de um objeto?
//R: Eles fazem com que os nomes vão de acordo com os animais.

//Exercício 3°
//A)O que vai ser impresso no console?
//R: Sera impresso "falso" e undefined, pois nao colocou altura.
//B)Explique o valor impresso no console. Voce sabe por que isso aconteceu?
//R: Nao foi impresso nenhum valor, deu undefined porque o nao deram valor para altura.

//Exercício 1°- Escrita de código

//const pessoa = {
  //nome: "Nayara",
  //apelidos: ["Nay", "Nah", "Nana"] 
//}

//console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}.`)

//Exercicío 2°

//const pessoa = {
  //  nome: "Marcela",
    //idade: 38,
    //profissao: "Promotora"
//}
 
//function minhaFuncao(pessoa) {
  //  const resultado = ["Marcela", 7, 38, "promotora", 9]
    //return resultado
//}

//console.log(minhaFuncao(pessoa))

//Exercício 3°

//const arrayCarrinho = ["uva", "manga", "morango"] 
//nome: ("uva")
//nome: ("manga")
//nome: ("morango")

//console.log(arrayCarrinho) 

//Exercício 1°
//A)R: Será impresso as arrays dos nomes e os apelidos.

//Exercício 2°
//A)R: Será impresso só os  nomes.

//Exercício 3°
//A)R: Será impresso só os dois primeiros nomes e os apelidos.

//Exercício 1° - Escrita de código

//const pets = [
  //  {nome: "Lupin", raca: "Salsicha"},
     // {nome: "Polly", raca: "Lhasa Apso"},
    //{nome: "Madame", raca: "Poodle"},
    //{nome: "Quentinho", raca: "Salsicha"},
    //{nome: "Fluffy", raca: "Poodle"}, 
    //{nome: "Caramelo", raca: "Vira-lata"},
//]

//const novaArrayB = pets.map((item, index, array) => {
  //  return item.nome
//})
//console.log(novaArrayB)

//const pets = [
  // {nome: "Lupin", raca: "Salsicha"},
  // {nome: "Polly", raca: "Lhasa Apso"},
  // {nome: "Madame", raca: "Poodle"},
   //{nome: "Quentinha", raca: "Salsicha"},
   //{nome: "Fluffy", raca: "Poodle"},
  // {nome: "Caramelo", raca: "Vira-lata"}
//]

//const petsDaracaSalsicha = (pets) => {
    //if(pets.raca === "Salsicha") {
     //   return true
    //}else{
    //   return false
  //  } 
//}

//const petsSalsicha = pets.filter(petsDaracaSalsicha)
//console.log(petsSalsicha)

//Exercício 2° 


//const produtos = [
    //{nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5},
    //{nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8},
    //{nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6},
    //{nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7},
    //{nome: "Leite", categoria: "Bebidas", preco: 2.99},
    //{nome: "Candida", categoria: "Limpeza", preco: 3.30},
    //{nome: "Detergente Ype", categoria: "Limpeza", preco: 2.2},
    //{nome: "Vinho Tinto", categoria: "Bebidas", preco: 55},
    //{nome: "Berinjela Kg", categoria: "Hortifruti", preco: 8.99},
  //  {nome: "Sabão em Pó Ype", categoria: "Limpeza", preco: 10.80}
//]

//const novaArrayA = produtos.map((item, index, array) => {
  //  return item.nome
//})
//console.log(novaArrayA)

//const categoriaBebidaPreco = (categoria) => {
  //if(categoria.Bebidas === "Bebidas"){
    //return true
  //}else{
    //return false
  //}
//}
//const BebidasPreco = categoria.filter(categoriaBebidaPreco)
//console.log(BebidasPreco)