import { React } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from 'yup';
import { CustomInputForm } from "./CustomInputForm";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAddEducation } from "../apis";


export const AddEducation = () => {
    const [submitFeedback, setSubmitFeedback] = useState('')
    const [res,addEducation]=useAddEducation()

    useEffect(()=>{
        if (res.success){
            setSubmitFeedback("Education Added")
        }
    },[res])
    

    const initialValues = {
        school: "",
        degree: "",
        fieldofstudy: "",
        from: "",
        current: false,
        to: "",
        description: ""
    }

    const validationShape = {
        school: Yup.string().required("status is required"),
        degree: Yup.string().required("Skills are required")
    }

    const submit = ({ school,degree,fieldofstudy,from,current,to,description }) => {
        const formdata = JSON.stringify({ school,degree,fieldofstudy,from,current,to,description })
        console.log(formdata)
        addEducation(formdata)
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
                        <CustomInputForm type="text" name="school" placeholder="school" label="Ypur school?" />
                        <CustomInputForm type="text" name="degree" placeholder="degree" label="Your majors?" />
                        <CustomInputForm type="text" name="fieldofstudy" placeholder="field of study" label="What di you Study?"/>
                        <CustomInputForm type="date" name="from" placeholder="dd/mm/yyyy" label="From Date" />
                        <CustomInputForm type="date" name="to" placeholder="dd/mm/yyyy" label="To Date" />
                        <CustomInputForm type="text" name="description" placeholder="description" label="Program Description" />
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
                                : 'Add Education'
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
