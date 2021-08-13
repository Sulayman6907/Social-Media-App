import React from "react";
import { WithToken } from "../../HOCs/withToken";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MiniDashboardComponent = ({user}) => {
  
  return (
    <div>
      <Customh1>Welcome {user && user.name} to your Dashboard </Customh1>
      <Link to="/add-profile"><CustomButton> Add Profile</CustomButton></Link>
      <Link to="/add-education"><CustomButton> Add Education</CustomButton></Link>
      <Link to="/add-experience"><CustomButton> Add Experience</CustomButton></Link>
    </div>
  );
};

const Customh1 = styled.h1`
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  font-family: Arial;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`

const CustomButton=styled.button`
    width: 15%;
    height: 40px;
    border: none;
    margin: 1rem 0;
    margin-left: 200px;
    margin-top: 20px;
    margin-right: 10px;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background-color: #FF0000;
    color: white ;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-3px);
    }
`

export const MiniDashboard = WithToken(MiniDashboardComponent);
