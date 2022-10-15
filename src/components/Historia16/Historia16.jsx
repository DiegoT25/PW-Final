import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import "./Historia16.css";
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import { AiFillTag } from "react-icons/ai";
import { AiOutlineContainer } from "react-icons/ai";
import { AiFillFileUnknown } from "react-icons/ai";


const Historia16 =() =>{
    return(
        <Container className="Contenedor">
                <Row className="fila">
                    <h1>Support Hub</h1>
                    <Col><Nav.Link href="/Historia17"><Button id="boton4"><AiOutlineContainer /><br></br>GUIDES</Button></Nav.Link></Col>
                    <Col><Nav.Link href="/Historia18"><Button id="boton4"><AiFillFileUnknown /><br></br>FAQ</Button></Nav.Link></Col>
                    <Col><Nav.Link href="/Historia19"><Button id="boton4"><AiFillTag /><br></br>SUBMIT A TICKET</Button></Nav.Link></Col>
                </Row>
        </Container>
    )
}

export default Historia16;