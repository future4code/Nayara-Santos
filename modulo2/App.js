import React from "react";
import paginaInicial from "./components/paginaInicial";
import paginaPlaylists from "./components/paginaPlaylists";


export default class App extends React.Component {
  state= {
   paginaAtual: "musicas"  
}

escolhaTela = () => {
 switch (this.state.paginaAtual){
   case "musicas":
     return <paginaInicial irParaMusicas={this.irParaMusicas}/>
   case "playlist":
     return <paginaPlaylists irParaplaylist={this.irParaplaylist}/> 
   default:
     return <div>Erro! Página não encontrada :</div>
  } 
 }

 irParaMusicas = () => {
   this.setState({paginaAtual: "musicas"})
 }

 irParaplaylist = () => {
  this.setState({paginaAtual: "playlist"})
 }

  
  render(){
    
    return (
      <div>
       {this.escolhaTela()}
      </div>
    );
  }
}  