
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