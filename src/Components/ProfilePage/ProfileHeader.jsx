import React from "react"
import { Link } from "react-router-dom"
import { AiFillFacebook } from "react-icons/ai";
import { PostLoader } from "../Loaders/PostLoader"

export const ProfileHeader = ({ profile }) => {

  return (
    <div>
      {profile ?
        <>
          <img src={profile.user.avatar} />
          <h1 >{profile.user.name}</h1>
          <p >{profile.status}</p>
          <p>{profile.location}</p>
          {profile.social != null && (
            <div className="icons my-1">
              <Link
                to={profile.social.website || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe fa-2x"></i>
              </Link>
              <Link
                to={profile.social.twitter || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </Link>
              <Link
                to={profile.social.facebook || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook></AiFillFacebook>
              </Link>
              <Link
                to={profile.social.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </Link>
              <Link
                to={profile.social.youtube || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube fa-2x"></i>
              </Link>
              <Link
                to={profile.social.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </Link>
            </div>
          )}
        </>
        : <PostLoader/>}
    </div>
  )
}