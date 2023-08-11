import React from 'react'
import LoginForm from './LoginForm'
import { styled } from 'styled-components'
import Logo from '../../reusable-ui/Logo'


export default function LoginPage() {

    
  return (
    <LoginPageStyled>
      <Logo/>
    <LoginForm/>
    </LoginPageStyled>

  )
}

const LoginPageStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: 
        linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
        url('/images/burger-background.jpg') fixed center/cover;
`;