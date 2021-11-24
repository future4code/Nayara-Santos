import React from "react"; 

export default class PaginaInicial extends React.Component {
    state = {
        nome: "",
        artista: "",
        url: ""
    }

    musicaNome = (event) => {
        this.setState({nome: event.target.value})
    }

    musicaArtista = (event) => {
        this.setState({artista: event.target.value})  
    }

    musicaUrl = (event) => {
        this.setState({url: event.target.value})
    }
    
    criarPlaylist = () => {

    }

    render(){
        return(
             
            <div>
                <button onClick={this.props.irParaPlaylist}>Ir para Playlists</button>
                <h2>Músicas</h2>
                <input 
                   placeholder={"Nome"}
                   value={this.state.name}
                   onChange={this.musicaNome}
                />
                <input 
                   placeholder={"Artista"}
                   value={this.state.artist}
                   onChange={this.musicaArtista}
                
                />
                <input 
                  placeholder={"url"}
                  value={this.state.url}
                  onChange={this.musicaUrl}
                />
                <button onClick={this.criarPlaylist}>Músicas</button>
            </div>
        )
    }
}