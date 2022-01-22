import React from "react"; 

export default class paginaPlaylists extends React.Component {
    
    render(){
        return(
            <div>
                 <button onClick={this.props.irParaplaylist}>Ir para Playlist</button>
                <h2>Playlist</h2>
            </div>
        )
    }
}