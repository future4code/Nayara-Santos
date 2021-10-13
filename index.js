//Exercício 1°
//A)Explique o que o código faz.Qual o teste que ele realiza?
//R:O código executa resultados do resto da divisão. E ele só executa resultados que forem números pares.
//B)Para que tipos de números ele imprime no console "Passou no teste"?
//R: Para números pares.
//C)Para que tipos de números a mensagem é "Não passou no teste"?
//R: Para números impares.



//Exercício 2°
//A)Para que serve o código acima?
//R: Para dá valor as frutas. 
//B)Qual será a mensagem impressa no console, se o valor de fruta for "Maça"?
//R: Irá ser impresso o preço da "Maça", 2.25.
//C)Considere que um usuário queira comprar uma Pera, qual seria a mensagem impressa no console se retirássemos o break 
//que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//R: Irá ficar o valor da fruta que está abaixo que é 5.


//Exercício 3°
//A)O que a primeira linha está fazendo?
//R: Está pedindo ao usuário digitar um numero.
//B)Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//R: A mensagem será que "Passou no teste". O -10 será que "Não passou".
//C)Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//R: Sim, pois será um valor negativo e o numero que está dentro da chave também é negativo.


//Exercício 1° - Escrita de código

const podeDirigir =(concluiuEnsinoMedio, temMaisDe18)=>{
    
  if(concluiuEnsinoMedio && temMaisDe18){
  console.log("Voce ira poder dirigir.")
  }else{
  console.log("Infelizmente, voce nao ira poder dirigir.")
  }
}

const concluiuEnsinoMedio = prompt("Voce terminou o ensino médio? Sim/Não").toLowerCase()=== "sim"
const temMaisDe18 = prompt("Voce tem  mais de 18 anos? Sim/Não").toLowerCase()=== "sim"

podeDirigir(concluiuEnsinoMedio, temMaisDe18)


//Exercício 2°


const periodoEscolar = (qualPeriodoEstuda)=>{
  if(qualPeriodoEstuda){
        
    console.log("Bom Dia!")
    
   }else{
    console.log("Voce estuda no periodo M")
   }
}

const qualPeriodoEstuda = prompt("Voce estuda de manha? Sim/Nao.").toLowerCase()=== "sim"

periodoEscolar(qualPeriodoEstuda)


//Exercício 3°


let periodoEscolar
switch (periodoEscolar) {
    case 'Matutino M':
        console.log('Bom dia!')
        break;
    case 'Vespertino V':
        console.log('Boa tarde!')
        break;
    case 'Noturno N':
       console.log('Boa noite!')       
        break;
    default:
       console.log()
}   


//exercício 4°


const filmesGenerosValorIngresso = (qualGeneroDoFilme, qualValorDoFilme)=> {
    if (qualGeneroDoFilme && qualValorDoFilme){
        console.log("Genero fantasia")
    }else{
        console.log("Escolha outro filme")    
    }
}
  
const qualGeneroDoFilme = prompt("Voce vai assistir filme do genero fantasia? Sim/Nao").toLowerCase()=== "sim"
const qualValorDoFilme = prompt("Qual é o valor do ingresso? 10,00").toLowerCase()=== "10,00"

filmesGenerosValorIngresso(qualGeneroDoFilme, qualValorDoFilme)








