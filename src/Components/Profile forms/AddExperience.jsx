import { React } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from 'yup';
import { CustomInputForm } from "./CustomInputForm";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAddExperience } from "../apis";



export const AddExperience = () => {
    const [submitFeedback, setSubmitFeedback] = useState('')
    const [res,addExperience]=useAddExperience()

    useEffect(()=>{
        if (res.success){
            setSubmitFeedback("Experience Added")
        }
    },[res])
    

    const initialValues = {
        title: "",
        company: "",
        location: "",
        from: "",
        to: "",
        current: false
    }

    const validationShape = {
        title: Yup.string().required("status is required"),
        company: Yup.string().required("Skills are required")
    }

    const submit = ({ title, company, location, from, to, current }) => {
        const formdata = JSON.stringify({ title, company, location, from, to, current })
        console.log(formdata)
        addExperience(formdata)
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
                        {submitFeedback ?
                            <CustomSuccessMessage>{submitFeedback}</CustomSuccessMessage>
                            : null
                        }
                        <h3>Let's get some information about your Education</h3>
                        <CustomInputForm type="text" name="title" placeholder="title" label="What is your current Job?" />
                        <CustomInputForm type="text" name="company" placeholder="company" label="Name of your Company?" />
                        <CustomInputForm type="text" name="location" placeholder="location" label="Where are you currently located?" />
                        <CustomInputForm type="date" name="from" placeholder="dd/mm/yyyy" label="From Date" />
                        <CustomInputForm type="date" name="to" placeholder="dd/mm/yyyy" label="To Date" />
                        <CustomButton type="button" onClick={() => { handleSubmit() }}>
                            {res.loading ?
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <span className="visually-hidden">Loading...</span>
                                </>
                                : 'Add Experience'
                            }
                        </CustomButton>
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
const CustomSuccessMessage = styled.h1`
  background: green;
  color: white;
`