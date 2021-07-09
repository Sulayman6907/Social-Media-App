import React from 'react'
import styled from 'styled-components';
import { BackgroundCover } from './BackgroundCover'
import { Avatar } from './Avatar'
import { Bio } from './Bio'
import { SocialIcon } from 'react-social-icons';

export const Profile = () => {
    const avatar="https://scontent.fisb1-2.fna.fbcdn.net/v/t1.6435-9/175649015_2942294489428116_730716296443233301_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_eui2=AeHKL1tmBo2hRqrXDavVJlP5MLU5hcLVNlMwtTmFwtU2U594x0d-rYQhqUSb56g50aPVQaRnVJNOK9ndYx9ztn5A&_nc_ohc=OlcNHgFmVyMAX8WkEQm&tn=YyYI5QcI4XeUHstO&_nc_ht=scontent.fisb1-2.fna&oh=abf896758ccbbe9cc84dc8c7e93f4489&oe=60EC432E"
    return (
        <>
        <BackgroundCover/>
        <Avatar avatar={avatar}/>
        <Bio/>
        <Container>
        <SocialIcon url="https://twitter.com/jaketrent" />
        <SocialIcon url="https://www.facebook.com/MuhammadSulaymanKhan/" />
        <SocialIcon url="https://www.instagram.com/muhammadsulaymannkhan/" />
        </Container>
        </>
    )
}

const Container=styled.div`
margin-left:680px;
margin-right:200px;
justify-content: center;
;`