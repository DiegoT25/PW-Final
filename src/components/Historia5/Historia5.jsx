import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Countries from "./Country-list";
import "./Historia5.css";

const Historia5 =() =>{
    return(

        <Container xs={1} md={1}fluid className="profile">
            <Col fluid>
                <Col fluid className="data_profile">
                    <Col fluid className="columna1">
                        <h6><strong>Default</strong></h6>
                        <Row fluid className="p1">
                            <p>Ed Va</p>
                        </Row>
                        <Row fluid className="p2">
                            <p>United States</p>    
                        </Row>
                    </Col>
                    <Col fluid className="columna2">
                        <Col fluid className="formulario">
                            <Col className="doble">
                                <Row className="label1">
                                    <label>First name</label>
                                    <input type="text" className="form-control" id="form_profile2_1" placeholder="" />
                                </Row>
                                <Row className="label2">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" id="form_profile2_2" placeholder="" />
                                </Row>
                            </Col>
                            
                            <Col className="simple">
                                <label>Email</label>
                                <input type="email" className="form-control" id="form_profile1" placeholder="" />
                                <Row className="address">
                                    <label>Address</label>
                                    <input type="text" className="form-control" id="form_profile1" placeholder="" />
                                </Row>
                            </Col>
                            <Col className="doble">
                                <Row className="label3">
                                    <label>Aparmaent, suit, etc</label>
                                    <input type="text" className="form-control" id="form_profile2" placeholder="" />
                                </Row>
                                <Row className="label4">
                                    <label>City</label>
                                    <input type="text" className="form-control" id="form_profile2" placeholder="" />
                                </Row>
                            </Col>
                            <Col className="doble">
                                <Col className="label1">
                                    <Row><label>Country/Region</label></Row>
                                    <Row><Countries></Countries></Row>
                                </Col>
                                <Col className="label2">
                                    <Row><label>Postal/zip code</label></Row>
                                    <Row><input type="text" className="form-control" id="form_profile2" placeholder="" /></Row>
                                </Col>
                            </Col>
                            <Col className="simple">
                                <Row className="phone">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" id="form_profile1" placeholder="" />
                                </Row>
                            </Col>
                        </Col>
                        <Col fluid className="update_info">
                            <Nav.Link href=""><Button type="submit" id="update_button">Update Info</Button></Nav.Link>
                        </Col>
                        <Col fluid className="cancel_button">
                            <Button type="reset" id="cancel_button">Cancel</Button>
                        </Col>
                    </Col>
                </Col>
            </Col>
        </Container>
    )
}

export default Historia5;