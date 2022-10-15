import React from "react";
import { useState } from "react";
import Content from "./Content.jsx";
import Image from "react-bootstrap/Image";
import { Container } from 'react-bootstrap'

function Accordion() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return selected(null);
        }
        setSelected(i);
    }
    
    return (
        <Container fluid className="wrapper">
            <div className="accordion col-12">
                {data.map((item, i) => (
                    <div className="item col-8">
                        <div className="title row" onClick={() => toggle(i)}>
                            <img id="accordion-item-image" class="img-categoria col-2" src={require(`../Images/product-case2.png`)} alt="img" />
                            <h2 class="titulo-categoria col-6">{item.title}</h2>
                            <h2 class="precio-categoria col-3">${item.price}</h2>
                            <span class="icon-dropdown-categoria col-1">{selected === i ? 
                            <img id="dropdown-icon" src={require(`../Images/icon-dropdown-open.png`)} alt="" /> 
                            : 
                            <img id="dropdown-icon" src={require(`../Images/icon-dropdown-close.png`)} alt="" />}</span>
                        </div>
                        <div
                            className={
                                selected === i ? 'content show' : "content row desplegable"
                            }
                        >
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}

const data = [
    {
        title: "Monster PC",
        content: 
        <Content
            image1 = "keyboard"
            title1 = "Keyboard & Mouse bundle"
            price1 = "39"
            
            image2 = "gpu2"
            title2 = "NVIDIA Geforce RTX 3070 8GB (VR READY)"
            price2 = "599"

            image3 = "ram"
            title3 = "16GB DDR4 Dual Channel"
            price3 = "79"
        />,
        price: "1899"
    },

    {
        title: "Cruser Build",
        content : <Content
            image1 = "keyboard"
            title1 = "Keyboard & Mouse bundle"
            price1 = "39"
            
            image2 = "gpu2"
            title2 = "NVIDIA Geforce RTX 3070 8GB (VR READY)"
            price2 = "599"

            image3 = "ram"
            title3 = "16GB DDR4 Dual Channel"
            price3 = "79"
    />,
        price: "1759"
        
    },

    {
        title: "Nasa PC",
        content : <Content
            image1 = "keyboard"
            title1 = "Keyboard & Mouse bundle"
            price1 = "39"
            
            image2 = "gpu2"
            title2 = "NVIDIA Geforce RTX 3070 8GB (VR READY)"
            price2 = "599"

            image3 = "ram"
            title3 = "16GB DDR4 Dual Channel"
            price3 = "79"
    />,
        price: "1679"
    },
    {
        title: "Budget Build ",
        content : <Content
            image1 = "keyboard"
            title1 = "Keyboard & Mouse bundle"
            price1 = "39"
            
            image2 = "gpu2"
            title2 = "NVIDIA Geforce RTX 3070 8GB (VR READY)"
            price2 = "599"

            image3 = "ram"
            title3 = "16GB DDR4 Dual Channel"
            price3 = "79"
    />,
        price: "1299"
    }
]

export default Accordion;