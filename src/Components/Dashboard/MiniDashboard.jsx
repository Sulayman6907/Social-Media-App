import React from "react";
import { WithToken } from "../../HOCs/withToken";
import { useEffect } from "react";
import styled from "styled-components";
import { useGetUser } from "../apis/useGetUser";

const MiniDashboardComponent = ({ user, setUser }) => {
  const [res, getUser] = useGetUser()

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    if (res.status===200) {
      setUser(res.data)
    }

  }, [res])
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
  font-family: Arial;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`
export const MiniDashboard = WithToken(MiniDashboardComponent);
