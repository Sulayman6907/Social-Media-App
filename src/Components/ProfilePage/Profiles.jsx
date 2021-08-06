import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllProfiles } from "../apis/useGetAllProfiles";
import styled from "styled-components";
import { BsFillChatSquareQuoteFill } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

export const Profiles = () => {
    const [res, getAllProfiles] = useGetAllProfiles()
    const [profiles,setprofiles]=useState()

    useEffect(() => {
        getAllProfiles();
    }, [])

    useEffect(() => {
        setprofiles(res.data)
    }, [res])

    return (
        <>
            <h1 >Community </h1>
            <p > Browse and connect with similiar people</p>
            <div >
                {profiles?profiles.map(dev => (
                    <Container key={dev.key} >
                        <DivImg>
                        <AvatarImg  src={dev.user.avatar} alt="user" />
                        </DivImg>
                        <div>
                            <Customh1>{dev.user.name}</Customh1>
                            <Customp><BsFillChatSquareQuoteFill></BsFillChatSquareQuoteFill>{dev.status}</Customp>
                            <Customp>Location: {dev.location}</Customp>
                            <Link to={`/profile/${dev.user._id}` }><Button variant="dark">View Profile</Button></Link>
                        </div>

                        <ul>
                            {dev.skills.map(skill => (
                                <li >
                                 {skill}
                                </li>
                            ))}
                        </ul>
                    </Container>
                )):<p></p>}
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
    text-align:center;
`
const Customp = styled.p`
    text-align:center;
`
const Status = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: left;
    justify-context: left;
    flex-direction: column;
    align-items: center;
`
const StatusText = styled.h3`
    padding-top: 30px;
`