import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Grafico from "../Images/Grafico_historiaExtra.png";

import "./HistoriaExtra.css";


const Historia15 =() =>{

    return(
        <Container fluid className="HistoriaExtra">
            <Row> 
                <Col md={{ span: 2, offset: 2 }} className="Image_Col">
                    <Image src={Grafico} id="Grafico"/>
                </Col>
            </Row>
        </Container>
    )

}
        
export default Historia15;