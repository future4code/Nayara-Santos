import axios from "axios"
import {useEffect, useState} from "react"


function App() {
  return (
    <div>
      <h1>LabeX</h1>
      <button onClick="verViagens">Ver viagens</button>
      <button onClick="areadeAdministracao">Área de Administração</button>
    </div>
  );
}

export default App;
