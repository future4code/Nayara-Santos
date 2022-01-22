import axios from "axios";
import { useEffect, useState } from "react"
import TelaMatch from "./components/TelaMatch";
import styled from "styled-components"


function App() {
  const [perfil, setPerfil] = useState({})
  const [proximo, setProximo] = useState(0)
  const [telaPerfil, setTelaPerfis] = useState(true)
  const [carregando, setCarregando] = useState("")
  const [like, setLike] = useState(false)
 
  const receberPerfil = () => {
    setCarregando("carregando")
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:nayara-santos-carver/person")
    .then((resposta) => {
      const novoPerfil = resposta.data.profile
      setPerfil(novoPerfil)
      setCarregando("Carregou")
    })
    .catch((erro) => {
      console.log(erro.response)
      setCarregando("Deu erro!")
    })
    console.log(carregando)
  }

  useEffect((props) => {
    receberPerfil()
  }, [proximo])

  const novoPerfil = () => {
    setProximo(proximo + 1)
  }
  
  const mudaTela =() => {
    setTelaPerfis(!telaPerfil)
  }

  const curtiPerfil = (like) => {
    setLike(like)
    enviarLike()
    novoPerfil()
  }

  const enviarLike = () => {
    const body = {
      id: perfil.id,
      choice: like
    }
    console.log(body)
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person", body)
    .then((resposta) => {
      console.log(resposta)
      if (resposta.data.isMatch){
        window.alert("Voce tem um novo match")
      }
    })
    .catch((erro) => {
      console.log(erro.response)
    })
  }

  return (
    <div>
      {telaPerfil ?
      <div>
        <h1>AstroMatch</h1>
      {carregando === "carregando"?
      <h1>carregando</h1>
      :<>
       {
         perfil.id ?
         <>
          <p>{perfil.name}</p>
          <button onClick={() => curtiPerfil(true)}>Like</button>
          <button onClick={() => curtiPerfil(false)}>Dislike</button>
          </>
          :
          <p>Não tem nenhum perfil disponivel</p>
        }</>
      }
      <button onClick={novoPerfil}>Proximo</button>
    </div>
    :
    <TelaMatch perfil={perfil}/>
    }
    <button onClick={mudaTela}>Mudar Tela</button>
    </div>
  );
}

export default App;
