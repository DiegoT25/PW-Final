import React from "react";
import Image from "react-bootstrap/Image";
import { Container } from 'react-bootstrap'

function Content(props){
    return(
        <Container fluid className="contentAccordion col-10">
        <div className="row accordion-item-content">
            <div className="col-2 colContent">
                <img class="img-subcategoria" src={require(`../Images/product-${props.image1}.png`)}  alt="image" />
            </div>
            <div className="col-8 colContent titulo-subcategoria">
                {props.title1}
            </div>
            <div className="col-2 colContent precio-subcategoria">
                ${props.price1}
            </div>
        </div>

        <div className="row accordion-item-content">
            <div className="col-2 colContent">
                <img class="img-subcategoria" src={require(`../Images/product-${props.image2}.png`)}  alt="image" />
            </div>
            <div className="col-8 colContent titulo-subcategoria">
                {props.title2}
            </div>
            <div className="col-2 colContent precio-subcategoria">
                ${props.price2}
            </div>
        </div>

        <div className="row accordion-item-content">
            <div className="col-2 colContent">
                <img class="img-subcategoria" src={require(`../Images/product-${props.image3}.png`)}  alt="image" />
            </div>
            <div className="col-8 colContent titulo-subcategoria">
                {props.title3}
            </div>
            <div className="col-2 colContent precio-subcategoria">
                ${props.price3}
            </div>
        </div>
        </Container>
        
    );
}

export default Content