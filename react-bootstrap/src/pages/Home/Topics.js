import { Col, Container, Row, Accordion } from "react-bootstrap";

const Topics = () => {
  return (
    <section id="topics">
      <Container fluid="md">
        <div className="text-center">
          <h2>Inside the Book....</h2>
          <p className="lead text-muted">
            A quick glance at the topics you'll learn
          </p>
        </div>

        {/* <Row className="my-5 g-5 justify-content-around align-items-center"> */}
        <Row className="my-5 g-5 align-items-center">
          <Col lg={4} md={6} sm="auto">
            <img src="/kindle.png" alt="ebook" className="img-fluid" />
          </Col>

          <Col lg={6}>
            {/* Accordion Starts */}
            <Accordion id="chapters">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Chapter 1 - Your First Web Page
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Chapter 2 - Mastering CSS</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Chapter 3 - The Power of JavaScript
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* Accordion Ends */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Topics;
