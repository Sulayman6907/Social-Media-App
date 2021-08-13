import React from "react"
import styled from "styled-components"

export const Comments=({comments})=>{
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