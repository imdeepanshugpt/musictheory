import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Music Theory</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;