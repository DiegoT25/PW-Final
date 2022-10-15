import React from "react";
import Image from "react-bootstrap/Image";
function Top_sellers(props) {
    return (
        <div className="container" id="containerTPSWhite">
            <div className="row" id="rowTPS">
                <div className="col image">
                    <Image className="img-product" id="imgProductTPS" src={require(`../Images/product-${props.image_name}.png`)} alt="product-image" />
                </div>
                <div className="col title">
                    <h3>{props.item_name}</h3>
                </div>
                <div className="col price">
                    <h3>{props.item_price}</h3>
                </div>
            </div>

        </div>
    );
}

export default Top_sellers;