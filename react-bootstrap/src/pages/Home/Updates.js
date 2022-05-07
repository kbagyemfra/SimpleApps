import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

const Updates = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Updates Starts */}
      <section className="bg-light">
        <Container>
          <div className="text-center">
            <h2>Stay in The Loop</h2>
            <p className="lead">Get the latest updates as they happen</p>
          </div>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <p className="text-muted my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur harum eum asperiores numquam porro aspernatur? Maiores
                itaque quia esse aliquid enim, neque porro exercitationem
                doloremque. Voluptate molestias obcaecati alias exercitationem?
              </p>
              <Button variant="primary" onClick={handleShow}>
                Register for Updates
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Updates Ends */}
      {/* Modal Starts */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get the Latest Updates</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus non
            quasi quam dolorum ducimus nostrum fugit debitis praesentium
            asperiores voluptatem est excepturi sed magni, iste adipisci et
            necessitatibus possimus dolore!
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>

                <Form.Control
                  type="email"
                  placeholder="eg. name@example.com"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal Ends */}
    </>
  );
};

export default Updates;
