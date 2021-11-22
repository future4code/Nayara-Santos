import React from "react";
import paginaInicial from "./components/paginaInicial";
import paginaPlaylists from "./components/paginaPlaylists";


export default class App extends React.Component {
  state= {
   musicName: "",
   artistName: "",
   urlLink: ""  
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

 musicName = (event) => {
   this.setState({musicName: event.target.value})
 }

 artistName = (event) => {
  this.setState({artistName: event.target.value})
 }

 urlLink = (event) => {
  this.setState({urlLink: event.target.value})
 }

  
  render(){
    
    return (
      <div>
       {this.escolhaTela()}
      </div>
    );
  }
}  
  


