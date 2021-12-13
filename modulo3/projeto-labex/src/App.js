import axios from "axios"
import {useForm} from './hooks/useForm';
import {useAdministrativo} from './hooks/useAdministrativo'


export default function PaginaInscreverViagens() {
  
  const { form, onChangeForm, limparFormulario } = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: ''
  })
  
  const onClickInscricao = (event) => {
    const body = {
    }
    event.preventDefault()
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labex/trips/nayara-santos-carver/apply', body)
    .then(() => {
      limparFormulario()
    })
    .catch((erro) => window.confirm("Ocorreu um erro", erro))
  }

  return (
    <div>
      <h1>LabeX</h1>
      <form onSubmit={onClickInscricao}>
        <input 
        name='name'
        type='text'
        value={form.name}
        onChange={onChangeForm}
        placeholder={'Nome'}
        pattern={'[A-Z a-z ]{3,}'}
        title=''
        required
        />
        <input 
        name= 'age'
        />
        <input
        name='applicationText'
        />
        <input
        name='profession'
        />
      </form>
      <button onClick="voltar">Voltar</button>
      <button onClick="inscrever-se">Inscrever-se</button>
      <h1>Login</h1>
            <input value ={email} onChange={mudaEmail} placeholder={"E-mail"}/>
            <input value ={senha} onChange={mudaSenha} placeholder={"Senha"}/>
            <button onClick ={fazerLogin}>Fazer Login</button> 
    </div> 
    )
   }
  }
 


