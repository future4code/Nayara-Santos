import React from "react"; 

export default class paginaInicial extends React.Component {
    
    render(){
        return(
           
            <div>
                <button onClick={this.props.irParaMusicas}>Ir para Playlist de musicas</button>
                <h2>Musicas</h2>
                <music src = "https://i.ytimg.com/vi/49FcWxm50gM/maxresdefault.jpg"/>
                <music src = "https://i.ytimg.com/vi/MQv__TADEGM/maxresdefault.jpg"/>
                <music src = "https://i.ytimg.com/vi/dMDa6drnhAo/maxresdefault.jpg"/>
                <music src = "https://i.ytimg.com/vi/EovGMtj4BPA/maxresdefault.jpg"/>
            </div>
        )
    }
}