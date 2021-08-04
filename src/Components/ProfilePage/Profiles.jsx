import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useGetAllProfiles } from "../apis/useGetAllProfiles";


export const Profiles = () => {
    const [res, getAllProfiles] = useGetAllProfiles()
    const [profiles,setprofiles]=useState()

    useEffect(() => {
        getAllProfiles();
    }, [])

    useEffect(() => {
        setprofiles(res.data)
    }, [res])

    return (
        <>
        
            <h1 >Community </h1>
            <p > Browse and connect with similiar people</p>
            <div >
                {profiles?profiles.map(dev => (
                    <div key={dev.key} >
                        <img  src={dev.user.avatar} alt="user" />
                        <div>
                            <h2>{dev.user.name}</h2>
                            <p>{dev.status}</p>
                            <p>{dev.location}</p>
                            <Link to={`/profile/${dev.user._id}`}>
                                View Profile
                            </Link>
                        </div>

                        <ul>
                            {dev.skills.map(skill => (
                                <li >
                                 {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                )):<p></p>}
            </div>
        </>
    );
};

