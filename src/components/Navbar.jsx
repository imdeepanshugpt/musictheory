import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Guitar Music Theory</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Lessons</Nav.Link>
              <NavDropdown title="Learn more" id="basic-nav-dropdown" className="ml-auto">
                <NavDropdown.Item>Chords & Scales</NavDropdown.Item>
                <NavDropdown.Item>Ear Training</NavDropdown.Item>
                <NavDropdown.Item>Song Analysis</NavDropdown.Item>
                <NavDropdown.Item>Tools</NavDropdown.Item>
                <NavDropdown.Item>Community</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Blog</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;
