import React from "react"
import { PostLoader } from "../Loaders/PostLoader"

export const EduExp = ({ profile }) => {

  return (
    <>
      {profile ?
        <>
          <div>
            <h2 >Experience</h2>
            {profile.experience != null &&
              profile.experience.map((exp, index) => (
                <div key={index}>
                  <h3 >{exp.company}</h3>
                  <p>Oct 2011 - Current</p>
                  <p>
                    <strong>Position: </strong>
                    {exp.title}
                  </p>
                </div>
              ))}
          </div>
          <div >
            <h2 >Education</h2>
            {profile.education != null &&
              profile.education.map((edu, index) => (
                <div key={index}>
                  <h3>{edu.school}</h3>
                  <p>Sep 1993 - June 1999</p>
                  <p>
                    <strong>Degree: </strong>
                    {edu.degree}
                  </p>
                  <p>
                    <strong>Field Of Study: </strong>
                    {edu.fieldofstudy}
                  </p>
                  <p>
                    <strong>Description: </strong>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                    ipsam, sapiente suscipit dicta eius velit amet aspernatur
                    asperiores modi quidem expedita fugit.
                  </p>
                </div>
              ))}
          </div>
        </>
        : <PostLoader/>}
    </>
  )
}







