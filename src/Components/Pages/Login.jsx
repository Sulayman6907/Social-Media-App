import React from 'react'
import styled from 'styled-components'
import bgImg from '../assests/bg.png'
import { LoginSidebar } from '../Login/LoginSidebar'
import { Main } from '../Signup/Main.jsx'

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <LoginSidebar />
        <Main />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`