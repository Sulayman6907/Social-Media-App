import React from "react";
import { WithToken } from "../../HOCs/withToken";
import { useEffect } from "react";
import styled from "styled-components";

const MiniDashboardComponent = ({ user, getUser }) => {
  
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      <Customh1>Welcome {user && user.name} from User Context </Customh1>
    </div>
  );
};

const Customh1 = styled.h1`
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  border: 1px solid #363636;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`
export const MiniDashboard = WithToken(MiniDashboardComponent);
