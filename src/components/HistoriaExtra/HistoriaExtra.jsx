import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Grafico from "../Images/Grafico_historiaExtra.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSackDollar} from "@fortawesome/free-solid-svg-icons"


import "./HistoriaExtra.css";


const Historia15 =() =>{

    return(
        <Container fluid className="HistoriaExtra">
            <Row className='Row_grafico'> 
                <Col md={{ span: 2}} className="Title_Column">
                    <h1 id="title_historiaExtra">¡CHECK OUR PRICE TEND!</h1>
                    <FontAwesomeIcon id="icono_historiaExtra" icon={faSackDollar} />
                </Col>
                <Col md={{ span: 2}} className="Image_Col">
                    <Image src={Grafico} id="Grafico"/>
                </Col>
            </Row>
        </Container>
    )

}
        
export default Historia15;