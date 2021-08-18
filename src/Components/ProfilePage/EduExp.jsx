import React from "react"
import { PostLoader } from "../Loaders/PostLoader"
import styled from "styled-components"

export const EduExp = ({ profile }) => {

  return (
    <>
      {profile ?
        <>
          <CenterDiv>
            <CenterText >Experience</CenterText>
            {profile.experience != null &&
              profile.experience.map((exp, index) => (
                <div key={index}>
                  <CenterTextCompany >{exp.company}</CenterTextCompany>
                  <CenterPara>From({exp.from}) - ({exp.to})</CenterPara>
                  <CenterPara>
                    <strong>Position: </strong>
                    {exp.title}
                  </CenterPara>
                </div>
              ))}
          </CenterDiv>
          <CenterDivEdu>
            <CenterText >Education</CenterText>
            {profile.education != null &&
              profile.education.map((edu, index) => (
                <CenterDivEdu key={index}>
                  <CenterText>{edu.school}</CenterText>
                  {edu.from && edu.to ?
                    <CenterPara>From ({edu.from})- ({edu.to})</CenterPara>
                    : 'No record to show'}
                  <p>
                    <strong>Degree: </strong>
                    {edu.degree}
                  </p>
                  <p>
                    <strong>Field Of Study: </strong>
                    {edu.fieldofstudy}
                  </p>
                  <strong>Description: </strong>
                  {edu.description ?
                    <CenterPara>{edu.description}</CenterPara>
                    : <CenterPara>Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                      ipsam, sapiente suscipit dicta eius velit amet aspernatur
                      asperiores modi quidem expedita fugit. </CenterPara>
                  }
                </CenterDivEdu>
              ))}
          </CenterDivEdu>
        </>
        : <PostLoader />}
    </>
  )
}

const CenterDiv = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: left;
    justify-context: left;
    flex-direction: column;
    align-items: center;
    border-bottom: 5px solid red;
    
`

const CenterDivEdu = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: left;
    justify-context: left;
    flex-direction: column;
    align-items: center;
    
`

const CenterText = styled.h3`
    text-align: center;
    border-bottom: 2px solid red;
`

const CenterPara = styled.p`
    text-align: center;
`
const CenterTextCompany = styled.h3`
    text-align: center;
    border-bottom: 2px solid red;
    padding-top: 30px;
`





