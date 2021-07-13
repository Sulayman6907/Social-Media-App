import React from 'react'
import styled from 'styled-components'

export const BackgroundCover = () => {
    return (
        <Container/>
    )
}

const Container=styled.div`
  min-width: 400px;
  min-height: 300px;
  background-color: black;
  border-color: black;
  border-style: solid;
  margin-left: 200px;
  margin-right: 200px;
  height: 100%;
  display: flex;
  padding: 0 2rem;
  margin-bottom: 30px;
`