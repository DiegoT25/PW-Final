import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import "./Support.css";
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import { AiFillTag } from "react-icons/ai";
import { AiOutlineContainer } from "react-icons/ai";
import { AiFillFileUnknown } from "react-icons/ai";


const Support =() =>{
    return(
        <Container fluid className="ContenedorH16">
                <Row className="fila">
                    <h1>Support Hub</h1>
                    <Col><Nav.Link href="/Historia17"><Button className="botonH16"><AiOutlineContainer /><br></br>GUIDES</Button></Nav.Link></Col>
                    <Col><Nav.Link href="/Historia18"><Button className="botonH16"><AiFillFileUnknown /><br></br>FAQ</Button></Nav.Link></Col>
                    <Col><Nav.Link href="/Historia19"><Button className="botonH16"><AiFillTag /><br></br>SUBMIT A TICKET</Button></Nav.Link></Col>
                </Row>
        </Container>
    )
}

export default Support;