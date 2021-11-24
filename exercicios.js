
// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  const soma = Number(prompt(num1, num2))
  // implemente sua lógica aqui
  return num1 + num2
}
console.log(soma(2, 5))

// EXERCÍCIO 0B
function imprimeMensagem() {
  console.log(mensagem.length)
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')
  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
const altura = 2
const largura = 5

return altura * largura
 
}

// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  const retornaArray = [3, 2, 1, 4, 7]
   
}  
console.log(retornaTamanhoArray) 



// EXERCÍCIO 02

function imprimeIdade() {
  const anoAtual = 2021  
  const anoNascimento = 2003
  return anoAtual - anoNascimento
}
console>log(subtracao(2021, 2003)

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 
  IMC = peso / (altura * peso)
 
 return resultado


  // implemente sua lógica aqui

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  const fraseFinal = `Meu ${nome} é, tenho ${idade} anos, e o meu ${email} é.`

  return fraseFinal
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}
 const resultado = imprimeInformacoesUsuario("Alice", 28, "alice@gmail.com")
 console,log(resultado)


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  const coresFavoritas = ["Preto", "Rosa", "Vermelho"] 
  
  console.log(coresFavoritas)
  
  

  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornastringemMaiuscula(mensagem) {
  console.log("retornastrings",mensagem.length)
  console.log(mensagem.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const listaDeNumeros = [1, 2, 3, 4,]
  console.log(listaDeNumeros)


  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const string1 = true
  const string2 = false

  let resultado = string1 && string2 
  console.log("a .", resultado)
 
  resultado = string1 && string2
  console.log("b .", resposta)

  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

=======
function retornaArrayInvertido(array) {
  const myArray = [3, 2, 1, 4, 7];
  myArray.reverse();
  return 
}
console.log(myArray)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   if (num1 > num2) {
       maior = num1
       menor = num2
   }else{
       maior = num2
       menor = num1
}

let object = {maiorNumero: maior,
              maiorDivisivelPorMenor: maior % menor === 0,
              diferenca: maior - menor
             }
return object
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
     return "Equilátero"
   }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
     return "Isósceles"
   }else if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    return "Equilátero"  
   }
}   


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a,b) => a-b)
    if (array.length === 2){
        return [array[0], array[1]]
    }
    array.pop()
    array.shift()
    return [array[array.length-1], array[0]]
}



// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const filme = {
       nome: "Cruella",
       ano_de_lancamento: 2021,
       direcao: "Craig Gillespie",
       atores: ["Emma Stone", "Emma Thompson", "Joel Fry", "John McCrea"]
    }
     return `Venham assistir ao filme ${filme.nome}, de ${filme.ano_de_lancamento}, dirigido por ${filme.direcao} e estrelado por ${filme.atores}`
}



// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let pessoa = {
   nome: "Astrodev",
   idade: 25,
   email: "astrodev@labenu.com.br",
   endereco: "Rua do Futuro, 4"
   }
}
pessoa.nome = "ANONIMO"


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  
}