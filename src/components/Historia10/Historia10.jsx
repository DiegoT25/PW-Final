import  Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'
import './Historia10.css';
import { BsController } from "react-icons/bs";
const Historia10 = () => {
    return (
    <Container className="container">
        <div class="grid-container">
            <div class="grid-item">
                <Button class="btn btn-primary" type="button" ><BsController class="icon"/>Gaming</Button>
            </div>
            <div class="grid-item">
                <Button class="btn btn-primary" type="button" >Design</Button>
            </div>
            <div class="grid-item">
                <Button class="btn btn-primary" type="button" >Coding</Button>
            </div>
            <div class="grid-item">
                <Button class="btn btn-primary" type="button" >Rendering</Button>
            </div>
            <div class="grid-item">
                <Button class="btn btn-primary" type="button" >Office</Button>
            </div>
            <div class="grid-item">
                <Button class="btn btn-primary" type="button" >Other</Button>
            </div>

            </div>
    </Container>
    )
}

export default Historia10