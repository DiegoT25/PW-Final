import ReactPlayer from 'react-player/lazy'
import React from 'react'
import "./Historia21.css";
import Image from "react-bootstrap/Image";
import imagen21A from "../Images/MrTop5.jpg";
import imagen21B from "../Images/ShortCircuit.jpg";
import { Container } from 'react-bootstrap'

const Historia21 = () => {
    return <Container fluid className="bg-light">
        <div className="row container" >

            <div className="text-dark h1" style={{ marginTop: "30px" }}>Influencers</div>
            <div class="row container">
               
                   <div className="col-6">
                       

                    <div className="card  border-light" style={{ marginRight: "0px", marginLeft: "0px", borderRadius: "" }}>
                        <div>
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=4vpPJb392Vg&feature=emb_logo'
                                width='100%'
                                height='370px'
                            />
                        </div>
                        <div className="card-body" style={{ paddingTop: "50px" }}>
                            <div className="background-autor-top">
                                Mr Top 5.
                            </div>
                            <p className="card-text review1 fs-5" style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                                This computer is absolutely insane! Once again if you want to check out this brand new Redux gaming PC - it's an absolute super computer. Highly, highly recommend it.
                            </p>
                            <div className="row" style={{ paddingTop: "20px" }}>
                                <div className="col-sm-3">
                                    <Image src= {imagen21A} className="MrTop5" style={{ width: "110px", height: "105px", borderRadius: "50%" }} alt="MrTop5" />
                                </div>
                                <div className="col-sm-6">
                                    <div>
                                        <p class="footer-text-1" style={{ color:"#d93e4d" }}>Mr Top 5.</p>
                                    </div>
                                    <div className="footer-top5"></div>
                                    <div style={{ width: "100%" }}>
                                        <p class="footer-text-2">Thanks to <a href="https://www.youtube.com/c/MoreMrTop5">@MrTop5</a> for showing off the unboxing of the #BuildRedux PC! Check out his video to see his PC and setup!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div class="col-6">

                        <div className="card  border-light" style={{   }}>
                            <div>
                                <ReactPlayer
                                    url='https://www.youtube.com/watch?v=UhO7MLntkDE'
                                    width='100%'
                                    height='370px'
                                />
                            </div>

                            <div className="card-body" style={{ paddingTop: "50px" }}>
                                <div className="background-autor-short">
                                    Short Circuit
                                </div>
                                <p className="card-text review1 fs-5" style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                                    You basically just pick which games you play, which performance you want, and it'll suggest a rig for you. They make things much, much simpler and again for only $75 bucks? Okay!
                                </p>
                                <div className="row" style={{ paddingTop: "10px" }}>
                                    <div className="col-sm-3">
                                        <Image src={imagen21B} className="ShowCircuit" style={{ width: "110px", height: "105px", borderRadius: "50%" }} alt="ShowCircuit" />
                                    </div>
                                    <div className="col-sm-6">
                                        <div>
                                            <p class="footer-text-1">Short Circuit.</p>
                                        </div>
                                        <div className="footer-short"></div>
                                        <div>
                                            <p class="footer-text-2">Thanks for the awesome review <a href="https://www.youtube.com/c/ShortCircuit">@ShortCircuit</a>!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
}

export default Historia21