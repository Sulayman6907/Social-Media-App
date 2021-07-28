import { React } from "react";
import styled from "styled-components";
import logo from '../assests/logo.svg'
import { Formik } from "formik";
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import { WithToken } from "../../HOCs/withToken";
import { CustomInput } from "./CustomInput";
import { useLogin } from "../apis/useLogin";

export const LoginSidebarComponent = () => {
  const [res, login] = useLogin()
  const history = useHistory();

  const submit = async ({ email, password }) => {
    console.log(email)
    const res =await login({ email, password })
    if (res.status === 201) {
      history.push("/feed")
    }
  }

  const validationShape = {
    password: Yup.string().required(),
    email: Yup.string().email().required("Email is required")
  }

  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          Fake <span>Book 2.0</span>
        </h3>
      </LogoWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={submit}
        validationSchema={Yup.object().shape(validationShape)}
      >
        {({ handleSubmit }) =>
          <>
            <h3>Login now</h3>
            <CustomInput type="email" name="email" placeholder="Email" label="email" />
            <CustomInput type="password" placeholder="password" name="password" label="password" />
            <button type="button" onClick={() => { handleSubmit() }}>Login</button>
          </>
        }
      </Formik>
      <h4>
        Don't have an account? <a href="/"> <span> Sign up</span></a>
      </h4>
    </Container>
  );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`
const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }
  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }
  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`
const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`
export const LoginSidebar = WithToken(LoginSidebarComponent)
