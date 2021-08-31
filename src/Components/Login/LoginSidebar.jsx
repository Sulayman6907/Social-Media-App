import { React } from "react";
import styled from "styled-components";
import logo from '../assests/logo.svg'
import { Formik } from "formik";
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import { WithToken } from "../../HOCs/withToken";
import { CustomInput } from "../Signup/CustomInput";
import { useLogin } from "../apis";
import { useEffect } from "react";
import { Spinner, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const LoginSidebarComponent = ({setIsLoggedIn}) => {
  const [res, login] = useLogin()
  const history = useHistory();

  useEffect(() => {
    if (res.status === 201) {
      setIsLoggedIn(true)
      history.push("/dashboard")
    }
  }, [res])

  const submit = async ({ email, password }) => {
    const user = JSON.stringify({ email, password });
    login(user)
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
            <CustomInput type="email" name="email" placeholder="Email" label="Email" />
            <CustomInput type="password" placeholder="password" name="password" label="Password" />
            {res.loading ? <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>
              : <CustomButton type="button" onClick={() => { handleSubmit() }}>Login</CustomButton>
            }
          </>
        }
      </Formik>
      <h4>
        Don't have an account? <a href="/"> <span> Sign up</span></a>
      </h4>
    </Container>
  );
};

const CustomButton=styled.button`
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
