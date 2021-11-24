// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  const retornaArray = [3, 2, 1, 4, 7]
   
}  
console.log(retornaTamanhoArray) 



// EXERCÍCIO 02
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