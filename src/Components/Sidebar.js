import React from 'react'
import styled from 'styled-components'
import logo from '../assests/logo.svg'
import Input from './Input'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';





const Sidebar = () => {

    const validate = Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match')
          .required('Confirm password is required'),
      })

      



    return (
        <Container>
           <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          Eli <span>Codes</span>
        </h3>
      </LogoWrapper>
      
      


      <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(Formik.values)
      }}
    >

{formik => (
        <div>
          <h3>Sign Up</h3>
          <FormWrapper>
          <Input label="First Name" name="firstName" type="text" />
            <Input label="last Name" name="lastName" type="text" />
            <Input label="Email" name="email" type="email" />
            <Input label="password" name="password" type="password" />
            <Input label="Confirm Password" name="confirmPassword" type="password" />
            <button type="submit" >Sign Up</button>
            </FormWrapper>
        </div>
      )}
    </Formik>    

        
        
        
        
      
      
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
        </Container>
    )
}

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const FormWrapper = styled.form`
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
`;

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
`;
const Container = styled.div`
min-width: 600px;
backdrop-filter: blur(35px);
background-color: rgba(255, 255, 255, 0.8);
height: 100%;
display: flex;
flex-direction: Column;
justify-content: space-evenly;
align-items: center;
padding: 0 2rem;
`;
export default Sidebar
