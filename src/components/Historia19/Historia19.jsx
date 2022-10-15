import "./Historia19.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Historia19 =() =>{
  return (
    <Container className="Contenedor">
        <Row>
            <h1 className="titulo">Submit a Ticket</h1>
        </Row>
        <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBacisName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="Name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="subject" placeholder="Subject..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicdescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description" placeholder="Description" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </Container>
  )
}

export default Historia19;