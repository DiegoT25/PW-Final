import React from "react";
import ReactPlayer from 'react-player/lazy';
import Boton from "./Boton.jsx";
import Image from "react-bootstrap/Image";
import check from "../Images/check.jpg";
import Rating from "./Rating.jsx";
import { Container } from "react-bootstrap";



function Historia22() {

    return (

        <Container fluid className="container22" style={{textAlign:"center",width:"500px",backgroundColor:"grey",}}>
            <h3 style={{marginBottom:"10%"}}>Thanks for your order!</h3>
        
            
             <Image src={check} className="check" style={{width:"30%",marginBottom:"50px"}}/>

            <div className="row"style={{marginBottom:"10%"}} >
                <div className="col-6">
               
                    <h4>Rate us</h4>

                </div>
                <div className="col-6">
                    
                    <div className="estrellas" ><Rating /></div>
                </div>
            </div>
            <form style={{textAlign:"left"}}>
            <label id="contenedor3" className="form-label"  >Leave a comment</label>
            <input className="form-control" type="text" style={{width:"100%",height:"100px"}}/>
            </form>

            <Boton />
        </Container>
    )
}
export default Historia22;