import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export const PostLoader = () => {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

const Container = styled.span`
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    border: 1px solid #363636;
    display: flex;
    flex-direction: column;
    margin-bottom:30px;
`