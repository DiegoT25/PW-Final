import React from "react";
import Accordion from "./Accordion.jsx";
import './RankingOrdenadores.css'

function RankingOrdenadores() {
    return (
        <div className="container" id = "containerBSB">
            <h1 class="h24-titulo">Best seller Builds</h1>
            <Accordion/>
        </div>
    );
}

export default RankingOrdenadores;