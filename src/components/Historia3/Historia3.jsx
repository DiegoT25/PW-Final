import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";
import logo from "../layout/Images_header/Imagen_menu.png";
import Button from "react-bootstrap/Button";
import "./Historia3.css";

const Historia3 =() =>{
    return(
        <Container className="Container">
            <Row>
                <Image src={logo} id="logo"/>
                <div className="Title">
                    <h1>Build your PC!</h1>
                </div>
                <div className="Subtitle">
                    <h2>Just for what you need</h2>
                </div>
                <div className="Buttons">
                    <Button id="Boton">Build for begginers</Button>
                    <Button id="Boton">Advanced building</Button>
                </div>
            </Row>
        </Container>
    )
}

export default Historia3;