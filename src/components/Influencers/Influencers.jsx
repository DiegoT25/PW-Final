import ReactPlayer from 'react-player/lazy'
import React, { useState } from 'react'
import "./Influencers.css";
import Image from "react-bootstrap/Image";
import { Container } from 'react-bootstrap'
import { useEffect } from 'react';

const Influencers = () => {
    const [resenas, setResenas] = useState([])

    const httpFetch = async () => {
        const resp = await fetch('http://localhost:4000/resenainfluencer')
        const data = await resp.json()
        let listaResenas = []
        data.map((resena) => {
            console.log(resena.tipo_resena.descripcion)
            if(resena.tipo_resena.descripcion === "influencer"){
                listaResenas.push(resena)
            }
        })
        console.log(data)
        setResenas(listaResenas)
    }

    useEffect(() => {
        httpFetch()
    },[]);

    return <Container fluid className="bg-light">
        <div className="row container" >

            <div className="text-dark h1" style={{ marginTop: "30px" }}>Influencers</div>
            <div class="row container">
                    {
                        resenas.map((resena) => {
                            return <div className="col-6">
                                <div className="card  border-light" style={{ marginRight: "0px", marginLeft: "0px", borderRadius: "" }}>
                                    <div>
                                        <ReactPlayer
                                            url={resena.video}
                                            width='100%'
                                            height='370px'
                                        />
                                    </div>
                                    <div className="card-body" style={{ paddingTop: "50px" }}>
                                        <div className="background-autor-top">
                                            {resena.tipo_resena.nombre}.
                                        </div>
                                        <p className="card-text review1 fs-5" style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                                            {resena.descripcion}
                                        </p>
                                        <div className="row" style={{ paddingTop: "20px" }}>
                                            <div className="col-sm-3">
                                                <Image src= "{imagen21A}" className="MrTop5" style={{ width: "110px", height: "105px", borderRadius: "50%" }} alt="" />
                                            </div>
                                            <div className="col-sm-6">
                                                <div>
                                                    <p class="footer-text-1" style={{ color:"#d93e4d" }}>{resena.tipo_resena.nombre}</p>
                                                </div>
                                                <div className="footer-top5"></div>
                                                <div style={{ width: "100%" }}>
                                                    <p class="footer-text-2">Thanks to <a href={resena.enlace}>@{resena.tipo_resena.nombre}</a> for showing off the unboxing of the #BuildRedux PC! Check out his video to see his PC and setup!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </Container>
}

export default Influencers