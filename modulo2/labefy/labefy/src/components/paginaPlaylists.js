import React from "react"; 

export default class PaginaPlaylists extends React.Component {
    
    render(){
        return(
            <div>
                <button onClick={this.props.irParaPlaylist}>Ir para Musicas</button>
                <h2>Criar Playlists</h2>
            </div>
        )
    }
}