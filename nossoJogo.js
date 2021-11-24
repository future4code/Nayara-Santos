/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    const fraseDeBemVindas = prompt("De as boas vindas aos jogadores!")
    console.log(fraseDeBemVindas)

  
const iniciarUmaRodada=(terDoisjogadores, saberJogar)=>{
  
    if(confirm(terDoisjogadores && saberJogar)){
      console.log("Voce pode jogar")
   }else{
      console.log("Voce nao pode jogar")

   }
}
const terDoisjogadores = prompt("Tem dois jogadores? Sim/Nao").toLowerCase()==="sim"
const saberJogar = prompt("Voces sabem jogar? Sim/Nao").toLowerCase()==="sim"

iniciarUmaRodada(terDoisjogadores, saberJogar)


//const carta = comprarCarta(); {

//const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];

//const naipes = ["♦️", "♥️", "♣️", "♠️"]

//const numero = cartas[Math.floor(Math.random() * 13)]

//const naipe = naipes[Math.floor(Math.random() * 4)]

//let valor

  //if (numero === "6") {
   //valor = 11
  //}//else if (numero === "2" || numero === "4" || numero === "6") {
   //valor = 10
  //}else { 
   //valor = Number(numero)
  //}   

//const carta = {
   //texto: numero + naipes,
  // valor: valor
  //}
  // return carta

//}


