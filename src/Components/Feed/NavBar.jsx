import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { WithToken } from '../../HOCs/withToken';

export const NavBarComponent = ({setUser}) => {
    const history=useHistory()
    const logout=()=>{
        localStorage.removeItem("token");
        setUser('')
        history.push("/login")
    }

    return (
        <Container>
            <CustomUl>
                <Header> Fakebook 2.0</Header>
                <StyledLink to="/feed"><CustomLi> Posts</CustomLi></StyledLink>
                <StyledLink to="/profiles"><CustomLi> Profiles</CustomLi></StyledLink>
                <Button onClick={logout}> Logout</Button>
            </CustomUl>
        </Container>
    )
}

const Container = styled.div`
    min-height: 80px;
    background-color: black;
    margin-bottom: 50px;
`
const Header = styled.h1`
    text-align: left;
    color: white;
    padding-top: 20px;
`
const CustomUl = styled.ul`
    display: flex;
    align-items: stretch; /* Default */
    justify-content: space-between;
    width: 100%;
`
const CustomLi = styled.li`
    display: block;
    color: white;
    padding-top: 30px;
    height: 50%;
    font-size: 20px;
    list-style-type: none;
    padding: 20px;
    border-color: black;
    border-width: 2px;  
    border-style: solid;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
`

export const NavBar=WithToken(NavBarComponent)