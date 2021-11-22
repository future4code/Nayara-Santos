import React from "react"; 

export default class paginaInicial extends React.Component {
    
    render(){
        return(
           
            <div>
                <button onClick={this.props.irParaMusicas}>Ir para Playlist de musicas</button>
                <h2>Musicas</h2>
            </div>
        )
    }
}