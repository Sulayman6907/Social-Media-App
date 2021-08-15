import React from "react"
import { useParams } from "react-router"
import styled from "styled-components"
import { useGetPostbyId } from "../apis"
import { useEffect } from "react"
import { PostLoader } from "../Loaders/PostLoader"
import { Comments } from "./Comments"
import { CreateComment } from "./CreateComment"

export const PostbyId = () => {
    const { id } = useParams()
    const [res, getpostbyId] = useGetPostbyId()

    useEffect(() => {
        getpostbyId(id)
    }, [])

    useEffect(() => {
        console.log(res)
    }, [res])

    return (
        <>
        <Container>
            {res.success ?
                <>
                    <div>
                        <DivImg>
                            <AvatarImg src={res.data.avatar} alt="new" />
                        </DivImg>
                        <Customh1>{res.data.name}</Customh1>
                    </div>
                    <Status>
                        <Customh1>Status</Customh1>
                        <StatusText>"  {res.data.text} "</StatusText>
                    </Status>
                    
                </>
                : <PostLoader /> }     
        </Container>
        <CreateComment id={id} comments={res.data.comments} />
        {res.success?
        <>
        <Customh1>Comments</Customh1>
        <Comments  id={id} comments={res.data.comments}/>
        </>
        :
        <PostLoader />}
        </>
    )
}

const Container = styled.div`
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    border: 1px solid #363636;
    display: flex;
    flex-direction: column;
    margin-bottom:30px;
`
const Customh1 = styled.h1`
    text-align: center;
`

const Status = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: left;
    justify-context: left;
    flex-direction: column;
    align-items: center;
`

const StatusText = styled.h3`
    padding-top: 30px;
`

const AvatarImg = styled.img`
    height: 200px:
    width: 200px; 
    border-radius: 100px;
    display: inline;
    padding-top: 10px;
`

const DivImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`