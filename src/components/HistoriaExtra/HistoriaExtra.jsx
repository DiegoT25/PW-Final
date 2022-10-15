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
            <Row> 
                <Col xs={1} md={{ span: 2, offset: 0}} className="Title_Column">
                    <h1 id="title_historiaExtra">¡CHECK OUR PRICE TREND!</h1>
                    <FontAwesomeIcon id="icono_historiaExtra" icon={faSackDollar} />
                </Col>
                <Col xs={1} md={{ span: 2, offset: 1}}>
                    <Image src={Grafico} id="Grafico_hExtra"/>
                </Col>
            </Row>
        </Container>
    )

}
        
export default Historia15;