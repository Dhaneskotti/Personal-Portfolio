import Container from "../../Assets/react-bootstrap/esm/Container";
import Nav from "../../Assets/react-bootstrap/esm/Nav";
import Navbar from "../../Assets/react-bootstrap/esm/Navbar";
import "./navbar.css";
function navbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold nav" style={{ color: "var(--myPrimaryDark)" }}>
          Welcome
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#quali">Qualification</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
