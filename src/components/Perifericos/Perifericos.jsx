import React from "react";
import "./Perifericos.css";
import Top_sellers from "./Topsellers.jsx";
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom";

function Perifericos(){
    return(
        <Container fluid className="container">
            <h1 id="h1M23" >Ranking best sellers periferics</h1>
            
            <div className="container cart-items">
                
                <Top_sellers
                    image_name="keyboard"
                    item_name="Keyboard & Mouse Bundle"
                    item_price="$99"
                />

            </div>

            <div className="container cart-items">
                
                <Top_sellers
                    image_name="procesador"
                    item_name="INTEL CORE I7 -12700F 12-CORE"
                    item_price="$359"
                />

            </div>

            <div className="container cart-items">
                <Top_sellers
                    image_name="gpu"
                    item_name="NVIDIA GEFORCE RTX 3070 8GB (VR READY)"
                    item_price="$679"
                />
            </div>

            <div className="container cart-items">
                <Top_sellers
                    image_name="ram"
                    item_name="1TB NVME M.2"
                    item_price="$99"
                />
            </div>

            <div className="container cart-items">
                <Top_sellers
                    image_name="case"
                    item_name="COOLER MASTER TD500 RGB"
                    item_price="$99"
                />
            </div>

            <Link to="/historia24"> <button type="button" class="btn btn-primary">Ranking Best seller Builds</button></Link>

        </Container>
    );
    
}

export default Perifericos;