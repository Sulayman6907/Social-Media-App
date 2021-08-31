import React from 'react'
import styled from 'styled-components'
import bgImg from '../assests/bg.png'
import { Sidebar,Main } from '../Signup'

export const Signup = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
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