import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
                <StyledLink to="/dashboard"><CustomLi> Dashboard</CustomLi></StyledLink>
                <StyledLink to="/feed"><CustomLi> Posts</CustomLi></StyledLink>
                <StyledLink to="/profiles"><CustomLi> Profiles</CustomLi></StyledLink>
                <CustomButton onClick={logout}> Logout</CustomButton>
            </CustomUl>
        </Container>
    )
}

const Container = styled.div`
    min-height: 80px;
    background-color: #FF0000;
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
    margin-top: 5px;
    height: 50%;
    font-size: 20px;
    list-style-type: none;
    padding: 20px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    position: relative;
`

const CustomButton=styled.button`
    width: 10%;
    height: 40px;
    border: none;
    margin: 1rem 0;
    margin-top: 20px;
    margin-right: 10px;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background-color: white;
    color: #FF0000;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-3px);
    }
`

export const NavBar=WithToken(NavBarComponent)