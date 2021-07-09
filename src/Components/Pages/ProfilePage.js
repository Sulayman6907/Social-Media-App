import React from 'react'
import { NavBar } from '../Feed/NavBar'
import { Profile } from '../ProfilePage/Profile'

const Jsondata=[
    {
      name: "Sulayman",
      avatar: "https://scontent.fisb1-1.fna.fbcdn.net/v/t1.6435-9/194711225_2983390401985191_1495320275213563202_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGULRKaxMFieLKnJQwSAS5lHHt_cUXcMe0ce39xRdwx7aojh5121gVFGgzR8X8y4MQM4LSMYkcEPnY6cD9R94V9&_nc_ohc=a7UNbrKqS3QAX_3lvi9&_nc_ht=scontent.fisb1-1.fna&oh=70e3b5cda6239122c30da5c4954a9a98&oe=60E2B317",
      status: "I am Happy",
      likes: 32,
      dislikes: 10,
      liked: true,
      key : 1,
      bio: "This is Sulayman I'm 22 years old and I'm learning React :))"
      
    }
];
export const ProfilePage = () => {
    return (
        <div>
            <NavBar/>
            <Profile data={Jsondata}/>
        </div>
    );
};
