import { Nav, Container, Navbar } from "react-bootstrap";

const Title = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <i className="bi bi-journals" style={{ color: "white" }}></i>
          Net Ninja Pro - The Book
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="#topics">About The Book</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#contact" className="text-white ">
              Get in Touch
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="pricing"
              className="btn btn-secondary text-white"
            >
              Buy Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Title;
