import React from 'react'
import {ScreenContainer, LogoImage, SignUpButtonContainer} from "./styled"
import logo from "../../assets/logo.receitas.png"
import { Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import { goToSingUp } from '../../routes/coordinator'
import { useHistory } from 'react-router'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory ()
    return (
        <ScreenContainer>
            <LogoImage src={logo}/> 
            <LoginForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
           <SignUpButtonContainer>
                <Button
                onClick={() => goToSingUp(history)}
                type={"submit"}
                fullWidth
                variant={"container"}
                color={"primary"}
                margin={"normal"}
                >
                Não possui conta? Cadastre-se
                </Button>
                </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage
