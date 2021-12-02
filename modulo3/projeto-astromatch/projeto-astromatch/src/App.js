import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [perfil,setPerfil] = useState({})
  const [proximo, setProximo] = useState({})
  const receberPerfil = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:nayara-santos-carver/person")
    .then((resposta) => {
      const novoPerfil = resposta.data.profile
      setPerfil(novoPerfil)
    })
    .catch((erro) => {
      console.log(erro.response)
    })
  }

  useEffect(() => {
    receberPerfil()
  }, [proximo])

  const novoPerfil = () => {
    setProximo(proximo+1)
  }

  return (
    <div>
      <h1>astromatch</h1>
      {
        perfil.id ?
        <p>{perfil.name}</p>
        :
        <p>Não tem nenhum perfil disponivel</p>
      }
      <button onClick={novoPerfil}>Proximo</button>
    </div>
  );
}

export default App;
