import {useState} from 'react'

export const useForm = (estadoInicial) => {
  const [form, setForm] = useState(estadoInicial)
  const onChangeForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const limparFormulario = () => {
    setForm(estadoInicial)
  }
  return {form, onChangeForm, limparFormulario}
}

function TelaViagens() {
    return (
      <div>
          <h1>Lista de Viagens</h1>
          <button onClick="Voltar">Voltar</button>
          <button onClick="inscrever-se">Inscrever-se</button>

      </div>
    );
  }
  
  export default TelaViagens;
   
    