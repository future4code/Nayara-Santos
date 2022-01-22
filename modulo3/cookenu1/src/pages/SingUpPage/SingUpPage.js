import React from 'react'
import logo from '../../assets/logo.receitas.png'
import { ScreenContainer } from './styled'
import SingUpForm from './SingUpForm'
import { LogoImage } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SingUpPage = () => {
    useUnprotectedPage()
    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            <SingUpForm/>
        </ScreenContainer>
    )
}

export default SingUpPage
