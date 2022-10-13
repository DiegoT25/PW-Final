import { Container } from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import './Historia14.css';
const Historia14 = () => {
    return (
        <Container fluid className="contenedor">
            <Col fluid>
         
                <Col Fluid className="productos">
                    <Col fluid className="lista">
                        
                        <Col fluid className="foto2"> foto </Col>
                        <Col fluid className="texto"><h4>Keyboard & mouse bundle</h4> </Col>
                        <Col fluid className="precio"> <h4>$39</h4></Col>
                        <Col fluid className="fecha">10/12/2022</Col>
                    </Col>
                </Col>
                <Col fluid className="productos">
                    <Col fluid className="lista">
                        <Col fluid className="foto2"> foto </Col>
                        <Col fluid className="texto"><h4>INTEL CORE I7 - 12700F 12-CORE</h4> </Col>
                        <Col fluid className="precio"> <h4>$359</h4></Col>
                        <Col fluid className="fecha">10/12/2022</Col>
                    </Col>
                </Col>
                <Col fluid className="productos">
                    <Col fluid className="lista">
                        <Col fluid className="foto2"> foto </Col>
                        <Col fluid className="text"><h4>NVIDIA GEFORCE RTX 3070 8GB</h4> </Col>
                        <Col fluid className="precio"> <h4>$679</h4></Col>
                        <Col fluid className="fecha">10/12/2022</Col>
                    </Col>
                </Col>
                <Col fluid className="productos">
                    <Col fluid className="lista">
                        <Col fluid className="foto2"> foto </Col>
                        <Col fluid className="text"><h4>1TB NVME M.2</h4> </Col>
                        <Col fluid className="precio"> <h4>$99</h4></Col>
                        <Col fluid className="fecha">10/12/2022</Col>
                    </Col>
          </Col>
                <Col fluid className="productos">
                    <Col fluid className="lista">
                        <Col fluid className="foto2"> foto </Col>
                        <Col fluid className="text"><h4>COOLER MASTER TD500 RGB</h4> </Col>
                        <Col fluid className="precio"> <h4>$99</h4></Col>
                        <Col fluid className="fecha">10/12/2022</Col>
                    </Col>
                </Col>
                <Col fluid className="productos">
                    <Col fluid className="lista">
                        <Col fluid className="foto2"> foto </Col>
                        <Col fluid className="text"><h4>BUILD + SETUP + TESTING</h4> </Col>
                        <Col fluid className="precio"> <h4>$99</h4></Col>
                        <Col fluid className="fecha">10/12/2022</Col>
                        
                    </Col>
                </Col>
            </Col>
        </Container>
    )
}
export default Historia14;