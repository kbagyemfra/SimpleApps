import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Offcanvas,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const Main = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section id="intro">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={5} className="text-center text-md-start">
            <h1>
              <div className="display-2">Black-Belt</div>
              <div className="display-5 text-muted">Your Coding Skills</div>
            </h1>
            <p className="lead my-4 text-muted">
              Ebook website, our prices are fair and we are looking for serious
              bookworms!!
            </p>
            <Button href="#pricing" variant="secondary" size="lg" active>
              Buy Now
            </Button>
            {/* Open Sidebar / offcanvas STARTS */}

            <>
              <Button
                variant="link"
                onClick={handleShow}
                className="d-block mt-3"
              >
                Explore my other books
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>My Other Books</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                  {/* Dropdown Starts */}
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Choose a book title"
                    variant="secondary"
                  >
                    <Dropdown.Item href="#">
                      Become a React Superhero
                    </Dropdown.Item>
                    <Dropdown.Item href="#sidebar">
                      Conquering Vue.js
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Levelling up Your Next.js
                    </Dropdown.Item>
                  </DropdownButton>
                  {/* Dropdown Ends */}{" "}
                </Offcanvas.Body>
              </Offcanvas>
            </>
            {/* Open Sidebar / offcanvas ENDS */}
          </Col>
          <Col md={5} className="text-center d-none d-md-block">
            <img
              className="img-fluid"
              src="/ebook-cover.png"
              alt="ebook-cover"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
