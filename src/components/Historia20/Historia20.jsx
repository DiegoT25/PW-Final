import "./Historia20.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';



import { GrStar } from "react-icons/gr";

const Historia20 =() =>{
    return (
        <Container fluid >
            <Row className="text_h20">
                <h1>User Reviews</h1>
            </Row>
            <Row className="text_h20">
                <h2>Global Rating <GrStar /><GrStar /><GrStar /><GrStar /><GrStar /></h2>
            </Row>
            <hr></hr>
            <Row className="text_h20">
                <h3>Juan Lopez<GrStar /><GrStar /><GrStar /><GrStar /></h3><br></br>
                <p>I completely recomend this service</p>
            </Row >
            <hr></hr>
            <Row className="text_h20">
                <h3>Jhon Doe<GrStar /><GrStar /><GrStar /></h3><br></br>
                <p>Great service</p>
            </Row>
            <hr></hr>
            <Row className="text_h20">
                <h3>Carl Johnson<GrStar /><GrStar /><GrStar /><GrStar /><GrStar /></h3><br></br>
                <p>Pc well builded and nice case quality</p>
            </Row>
            <Row>
                <Nav.Link href="/Historia21"><Button className="botonInflu" id="boton_influencer">Influencers</Button></Nav.Link>
            </Row>
        </Container>
        )   
    }


export default Historia20;