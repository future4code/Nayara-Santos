import React from "react";
import PaginaInicial from "./components/PaginaInicial";
import PaginaPlaylists from "./components/PaginaPlaylists";


export default class App extends React.Component {
  state = {
    paginaAtual: "Criar playlists"
  }

  escolherMusica = () => {
    switch (this.state.paginaAtual){
     case "Criar playlists":
       return <PaginaInicial irParaPlaylist={this.irParaPlaylist}/>
     case "musicas":
       return <PaginaPlaylists irParaMusicas={this.irParaMusicas}/>
     default:
       return <div>Página encontrada :)</div>     
    }
  }
  
  irParaPlaylist = () => {
    this.setState({paginaAtual: "Criar playlists"})
  }

  irParaMusicas = () => {
    this.setState({paginaAtual: "Musicas"})
  }
  
  render(){
    return (
      <div>
       <h1>Labefy</h1>
       {this.escolherMusica()}
      </div>
    )
  }
}


  


