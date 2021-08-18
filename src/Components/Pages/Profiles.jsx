import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllProfiles } from "../apis";
import styled from "styled-components";
import { BsFillChatSquareQuoteFill, BsCheck } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { PostLoader } from "../Loaders/PostLoader";

export const Profiles = () => {
    const [res, getAllProfiles] = useGetAllProfiles()
    const [profiles, setprofiles] = useState()

    useEffect(() => {
        getAllProfiles();
    }, [])

    useEffect(() => {
        setprofiles(res.data)
    }, [res])

    return (
        <>
            <CenterText >Community </CenterText>
            <CenterPara> Browse and connect with similiar people</CenterPara>
            <div >
                {profiles ? profiles.map(dev => (
                    <Container key={dev.user._id} >
                        <DivImg>
                            <AvatarImg src={dev.user.avatar} alt="user" />
                        </DivImg>
                        <div>
                            <Customh1>{dev.user.name}</Customh1>
                            <Customp><BsFillChatSquareQuoteFill></BsFillChatSquareQuoteFill>{dev.status}</Customp>
                            <Customp>Location: {dev.location}</Customp>
                            <CustomDiv>
                                <CustomLink to={`/profile/${dev.user._id}`}><Button variant="dark">View Profile</Button></CustomLink>
                            </CustomDiv>
                        </div>
                        <CustomUl>
                            {dev.skills.map((skill, index) => (
                                <CustomLi key={index}>
                                    <BsCheck />
                                    {skill}
                                </CustomLi>
                            ))}
                        </CustomUl>
                    </Container>
                )) : <PostLoader />}
            </div>
        </>
    );
};

const Container = styled.div`
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    border: 1px solid #363636;
    display: flex;
    flex-direction: column;
    margin-bottom:30px;
`

const AvatarImg = styled.img`
    height: 200px:
    width: 200px; 
    border-radius: 100px;
    display: inline;
    padding-top: 10px;
`

const DivImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Customh1 = styled.h1`
    text-align: center;
`

const CustomDiv = styled.div`
    text-align: center;
`

const Customp = styled.p`
    text-align: center;
`

const CustomLink = styled(Link)`
    text-align: center;
`

const CustomUl = styled.ul`
    text-align: center; 
`

const CustomLi = styled.li`
    list-style-type: none;
    margin-left: -50px;
`
const CenterText = styled.h1`
    text-align: center;
    border-bottom: 2px solid red;
`

const CenterPara = styled.h3`
    text-align: center;
`
