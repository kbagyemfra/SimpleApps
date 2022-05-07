import { Col, Container, Row, Button, Card } from "react-bootstrap";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-light mt-5">
      <Container fluid="lg">
        <div className="text-center">
          <h2>Pricing Plans</h2>
          <p className="lead text-muted">Choose a pricing plan to suit you.</p>
        </div>

        <Row className="my-5 align-items-center justify-content-center g-2">
          <Col md={8} lg={4} xl={3}>
            {/* Card Starts */}
            <Card
              className="border-0"
              style={{ width: "18rem", color: "#e6b800" }}
            >
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body className="text-center py-4">
                <Card.Subtitle className="text-muted fs-4">
                  Starter Edition
                </Card.Subtitle>
                <Card.Text className="text fw-light">
                  eBook download only
                  <p className="display-5 my-4 fw-bold">12.99</p>
                  <p className="mx-5 text-muted d-none d-lg-block">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod fuga consectetur illo velit, minima accusantium dolor
                    maiores.
                  </p>
                </Card.Text>
                <Button
                  variant="outline-primary"
                  style={{ color: "#e6b800" }}
                  className="mt-3"
                  href="/"
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
            {/* Card Ends */}
          </Col>
          <Col md={9} lg={4} xl="auto">
            {/* Card Starts */}
            <Card
              className="border-2 border-primary"
              style={{ width: "18rem" }}
            >
              <div className="card-header text-center text-primary">
                Most Popular
              </div>
              <Card.Body className="text-center py-4">
                <Card.Text className="text fw-light">
                  eBook download & all updates
                  <p className="display-5 my-4 text-primary fw-bold">12.99</p>
                  <p className="mx-5 text-muted d-none d-lg-block">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod fuga consectetur illo velit, minima accusantium dolor
                    maiores.
                  </p>
                </Card.Text>
                <Button variant="outline-primary" className="mt-3" href="/">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
            {/* Card Ends */}
          </Col>
          <Col md={8} lg={4} xl={3}>
            {/* Card Starts */}
            <Card
              className="border-0"
              style={{ width: "18rem", color: "#990000" }}
            >
              <Card.Body className="text-center py-4">
                <Card.Title className="text-muted">Ultimate Edition</Card.Title>
                <Card.Subtitle className="lead fw-light fs-6">
                  download, updates & extras
                </Card.Subtitle>
                <p className="display-5 my-4 fw-bold">24.99</p>{" "}
                <Card.Text className="text fw-light">
                  <p className="mx-5 text-muted d-none d-lg-block">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod fuga consectetur illo velit, minima accusantium dolor
                    maiores.
                  </p>
                </Card.Text>
                <Button
                  variant="outline-primary"
                  style={{ color: "#990000" }}
                  className="mt-3"
                  href="/"
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
            {/* Card Ends */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
