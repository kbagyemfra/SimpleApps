import { Container, ListGroup, Row, Col } from "react-bootstrap";

const Review = () => {
  return (
    <section id="reviews" className="bg-light">
      <Container fluid="lg">
        <div className="text-center">
          <h2>
            <i className="bi bi-star-half"></i> Book Review
          </h2>
          <p className="lead">What my students have said about the book....</p>{" "}
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <ListGroup>
              <ListGroup.Item className="py-3">
                <div className="pb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5 className="mb-1">A must buy for every aspiring web dev</h5>
                <p className="mb-1 fs-6 fw-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  aliquam mollitia, iusto voluptatum vel voluptas labore quasi
                  obcaecati ipsum eveniet odio ab at cupiditate, esse ducimus
                  facere eaque nisi dolorum.
                </p>
              </ListGroup.Item>
              <ListGroup.Item className="py-3">
                <div className="pb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5 className="mb-1">Definition of web dev</h5>
                <p className="mb-1 fs-6 fw-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Review;
