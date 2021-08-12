import { React } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import { CustomInputForm } from "./CustomInputForm";
import { useLogin } from "../apis/useLogin";
import { useEffect } from "react";
import { Spinner, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCreateProfile } from "../apis/useCreateProfile";

export const AddProfile = () => {
    const [res,createProfile]=useCreateProfile()
    const history=useHistory()

    useEffect(()=>{
        if (res.success){
            history.push("/dashboard")
        }
    },[res])

    const initialValues = {
        status: "",
        company: "",
        website: "",
        location: "",
        skills: "",
        bio: ""
    }

    const validationShape = {
        status: Yup.string().required("status is required"),
        skills: Yup.string().required("Skills are required")
    }

    const submit = ({ status,company,website,location,skills,bio }) => {
        const formdata=JSON.stringify({status,company,website,location,skills,bio})
        console.log(formdata)
        createProfile(formdata)
    }

    return (
        <Container>
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={Yup.object().shape(validationShape)}
            >
                {({ handleSubmit }) =>
                    <>
                        <h3>Let's get some information to make your profile stand out</h3>
                        <CustomInputForm type="text" name="status" placeholder="status" label="Choose whatever you want, no questions asked!" />
                        <CustomInputForm type="text" name="company" placeholder="Company" label="Could be your own company or the league you work with" />
                        <CustomInputForm type="text" name="website" placeholder="website" label="You aren't famous if you don't have a website" />
                        <CustomInputForm type="text" name="location" placeholder="location" label="Planet, City & state suggested (eg. Mars, Boton, UGALA)" />
                        <CustomInputForm type="text" name="skills" placeholder="skills" label="Please use comma separated your superpowers (eg. Money making, x-ray vision, flying etc)" />
                        <CustomInputForm type="text" name="bio" placeholder="bio" label="Tell us a little about yourself" />
                        <CustomButton type="button" onClick={() => { handleSubmit() }}>Add Profile</CustomButton>
                    </>
                }
            </Formik>
        </Container>
    );
};

const CustomButton = styled.button`
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #FF0000;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
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

