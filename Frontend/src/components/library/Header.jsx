import { Alert, Container } from "react-bootstrap";

export function Header(props) {
    return (
        <Container className="mt-4" >
            <Alert variant="success"><h5 align="center">{props.title}</h5></Alert>
            <p align="center">{props.description}</p>
        </Container>
    )
}