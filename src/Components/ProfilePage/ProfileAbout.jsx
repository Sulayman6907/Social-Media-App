import React from "react"
export const ProfileAbout = ({ profile }) => {
    return (
        <div >
            {profile ?
                <>
                    <h2 >{`${profile.user.name}'s Bio`}</h2>
                    <p>{profile.bio}</p>
                    <h2 >Skill Set</h2>
                    <div >
                        {profile.skills.map((skill, index) => (
                            <div key={index} >
                                {skill}
                            </div>
                        ))}
                    </div>
                </>
                : <p></p>}
        </div>
    )
}