import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "./Historia5.css";

const Historia5 =() =>{
    return(

        <Container className="profile">
            <Col>
                <div className="data_profile">
                    <div className="columna1">
                        <h10><strong>Default</strong></h10>
                        <div className="p1">
                            <p>Ed Va</p>
                        </div>
                        <div className="p2">
                            <p>United States</p>    
                        </div>
                    </div>
                    <div className="columna2">
                        <div className="formulario">
                            <div className="doble">
                                <div className="label1">
                                    <label>First name</label>
                                    <input type="text" class="form-control" id="form_profile2_1" placeholder="" />
                                </div>
                                <div className="label2">
                                    <label>Last name</label>
                                    <input type="text" class="form-control" id="form_profile2_2" placeholder="" />
                                </div>
                            </div>
                            
                            <div className="simple">
                                <label>Email</label>
                                <input type="email" class="form-control" id="form_profile1" placeholder="" />
                                <div className="address">
                                    <label>Address</label>
                                    <input type="text" class="form-control" id="form_profile1" placeholder="" />
                                </div>
                            </div>
                            <div className="doble">
                                <div className="label3">
                                    <label>Aparmaent, suit, etc</label>
                                    <input type="text" class="form-control" id="form_profile2" placeholder="" />
                                </div>
                                <div className="label4">
                                    <label>City</label>
                                    <input type="text" class="form-control" id="form_profile2" placeholder="" />
                                </div>
                            </div>
                            <div className="doble">
                                <div className="label1">
                                    <label>Country/Region</label>
                                    <select class="form-control" id="form_profile2" placeholder="" />
                                </div>
                                <div className="label2">
                                    <label>Postal/zip code</label>
                                    <input type="text" class="form-control" id="form_profile2" placeholder="" />
                                </div>
                            </div>
                            <div className="simple">
                                <label>Phone</label>
                                <input type="text" class="form-control" id="form_profile1" placeholder="" />
                            </div>
                        </div>
                        <div className="update_info">
                            <Nav.Link href=""><Button type="submit" id="update_button">Update Info</Button></Nav.Link>
                        </div>
                        <div className="cancel_button">
                            <Nav.Link href=""><Button type="reset" id="cancel_button">Cancel</Button></Nav.Link>
                        </div>
                    </div>
                </div>
            </Col>
        </Container>
    )
}

export default Historia5;