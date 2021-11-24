// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
  return `No comparador de igualdade ${a} === ${b} é ${a === b}`
}
console.log(checarIgualdade(1, 3));

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b){
    return `No comparador de maior ${a} > ${b} é ${a > b}`
}
console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
 //a-) 1==='1'= false
 //b-) 1=='1'= false
 //c-) 'a'==='b'= true
 //d-) 'b'>'a'= true
 //e-) 0!==null= false


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

//const cadastro =(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade) => {
    //const usuario = [
        //{nomeDoUsuario = "Samantha"},
        //{anoDeNascimento = "2001"},
        //{senhaDoUsuario = "123456"},
        //{nacionalidade = "brasileira"}
    //]
    
    //  Sua lógica aqui
//}
//console.log(cadastro(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade));

// Exercício 4-----------------------------------------------------------------------------------------------

//const login = () => {
    //const login = "labenu"
    //const senha = prompt("Qual é sua senha?") === "senha valida"
    
    //  Sua lógica aqui

//}

//console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

//const primeiraDose = () => {
  //const pessoa = (nome, vacina)
    //const nome = "Aurora"
    //const vacina = "Coronavac"
    
  //let dataTempo = (data, tempo) 
    //let data = "10/07/2021"
    //let tempo = "28 dias"

    
 //`Olá ${nome}! A proxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na ${data}.`
    
      
    //  Sua lógica aqui
//}
//console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
 
    //  Sua lógica aqui
    const vacinaçaoCorona = usuarios.filter((pessoa)=>{
    if(pessoa.nome === nomeDoUsuario){
        pessoa.imunizacao = "completa"

        return pessoa
    }
    })
    console.log(vacinaçaoCorona)     
}
const nomePessoa = "Barbara"
segundaDose(nomePessoa)

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    const vacinaçao = usuarios.filter((pessoa)=>{
        if(pessoa.imunizacao === "incompleta"){
            return true
        }
    })
   
    const enviarMensagem = vacinaçao.map((pessoa)=>{
        console.log(`Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
    })
}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());

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