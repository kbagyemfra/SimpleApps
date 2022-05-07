import {
  Col,
  Container,
  Row,
  Form,
  FloatingLabel,
  Button,
  InputGroup,
} from "react-bootstrap";

const ContactForm = () => {
  return (
    <section id="contact">
      <Container fluid="lg">
        <div className="text-center">
          <h2>Get in Touch</h2>
          <p className="lead">
            Questions to ask? Fill out the form to contact me directly....
          </p>
        </div>

        <Row className="justify-content-center my-5">
          <Col lg={6}>
            {/* Form Begins */}
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i className="bi bi-person-fill"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="name"
                    placeholder="eg. John"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" as={Col} controlId="formGridState">
                <Form.Label>What is your question about?</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i className="bi bi-question-diamond-fill"></i>
                  </InputGroup.Text>

                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option value="pricing">Pricing</option>
                    <option value="content">Content</option>
                    <option value="otther">Other</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your query...."
                  className="mb-3 fw-light fs-6"
                >
                  <Form.Control type="query" placeholder="Your query...." />
                </FloatingLabel>

                {/* <Form.Label>Your query....</Form.Label>
                <Form.Control as="textarea" rows={3} /> */}
              </Form.Group>
              <div className="button-style mb-4 text-center">
                <Button type="submit">Submit form</Button>
              </div>
            </Form>
            {/* Form Ends */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
