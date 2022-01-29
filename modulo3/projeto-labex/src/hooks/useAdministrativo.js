import React, {useState} from "react";

const useAdministrativo = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const mudaEmail = (event) => {
        setEmail(event.target.value)
    };

    const mudaSenha = (event) => {
        setSenha(event.target.value)
    };

    const fazerLogin  = () => {
        const body = {
            email: nayara, 
            password: 123456 
        }
        console.log(body) 
    }

    return (
        <div>
            <h1>Login</h1>
            <input value ={email} onChange={mudaEmail} placeholder={"E-mail"}/>
            <input value ={senha} onChange={mudaSenha} placeholder={"Senha"}/>
            <button onClick ={fazerLogin}>Fazer Login</button> 
        </div>
    )
}

export default useAdministrativo