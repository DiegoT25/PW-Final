import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./Historia15.css";
import imagen15 from "../Images/historia15imagen.png";

const Historia15 =() =>{

    return(
        <Container>
        <Row xs={1} className="justify-content-md-center w-80">
            <div className="alcance" ></div>
        </Row>
        <Row xs={1} className="justify-content-md-center w-80">
        <div className="fondoB">
            <div className="format">
            <p id="letra"><i>CHECKOUT OUR LATEST BUILD AND MAKE IT YOUR</i></p>
            </div>
            <p id="letra2"><i>OWN!</i></p>
            <div className="flexi">
            <Image src={imagen15} id="imagen15"/>
            <div className="alinearl">
            <p id="letra3"><i>OUR MISSION IS TO BUILD GAMING PCS AT THE</i></p>
            <p id="letra3"><i>BEST PRICE WITHOUT CUTTING CORNERS.</i></p>
            </div>
            </div>
        </div>
        
        </Row>
        <Row xs={1} className="justify-content-md-center w-80">
        <div className="fondoA" >
        <div className="button"><Button id="Boton">LET´S BUILD</Button>
        </div>
        </div>
        
        </Row>
        </Container>
    )

}

export default Historia15;