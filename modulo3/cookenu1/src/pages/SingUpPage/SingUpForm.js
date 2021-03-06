import React from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {InputsContainer, SingUpFormContainer} from './styled'
import {useHistory} from 'react-router-dom'
import useForm from '../../hooks/useForm'

const SingUpForm= () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({name:"", email:"", password:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        singUp(form, clear, history)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <SingUpFormContainer>
                <InputsContainer>
                <TextField
                    value={form.name}
                    name={'name'}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    required
                    autoFocus
                    margin={"normal"}
                    />
                <TextField
                    value={form.email}
                    name={"email"}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    type={"email"}
                    fullWidth
                    required
                    margin={"normal"}
                    />
                <TextField
                     value={form.password}
                     name={"password"}
                     onChange={onChange}
                     label={"Senha"}
                     variant={"outlined"}
                     type={"password"}
                     fullWidth
                     required
                     margin={"normal"} 
                     /> 
                </InputsContainer>
                <Button
                   color={"primary"}
                   variant={"container"}
                   type={"submit"}
                   fullWidth
                   >
                       Fazer Cadastro
                   </Button>
            </SingUpFormContainer>
        </form>

    )
}

export default SingUpForm