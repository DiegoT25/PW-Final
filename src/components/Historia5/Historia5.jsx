import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
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
                                <label>First name</label>
                                <input type="text" class="form-control" id="form_profile2_1" placeholder="" />
                                <label>Last name</label>
                                <input type="text" class="form-control" id="form_profile2_2" placeholder="" />
                            </div>
                            <div className="simple">
                                <label>Email</label>
                                <input type="email" class="form-control" id="form_profile1" placeholder="" />
                                <label>Address</label>
                                <input type="text" class="form-control" id="form_profile1" placeholder="" />
                            </div>
                            <div className="doble">
                                <label>Aparmaent, suit, etc</label>
                                <input type="text" class="form-control" id="form_profile2" placeholder="" />
                                <label>City</label>
                                <input type="text" class="form-control" id="form_profile2" placeholder="" />
                            </div>
                            <div className="doble">
                                <label>Country/Region</label>
                                <select class="form-control" id="form_profile2" placeholder="" />
                                <label>Postal/zip code</label>
                                <input type="text" class="form-control" id="form_profile2" placeholder="" />
                            </div>
                            <div className="simple">
                                <label>Phone</label>
                                <input type="text" class="form-control" id="form_profile1" placeholder="" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Col>
        </Container>
    )
}

export default Historia5;