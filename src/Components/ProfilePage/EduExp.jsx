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
                  <p>From({exp.from}) - ({exp.to})</p>
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
                  {edu.from && edu.to ?
                    <p>From ({edu.from})- ({edu.to})</p>
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
                    <p>{edu.description}</p>
                    : <p>Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                      ipsam, sapiente suscipit dicta eius velit amet aspernatur
                      asperiores modi quidem expedita fugit. </p>
                  }
                </div>
              ))}
          </div>
        </>
        : <PostLoader />}
    </>
  )
}







