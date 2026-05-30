import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Container>

        <Navbar.Brand as={Link} to="/">
          🎓 E-Learning
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/courses">
              Courses
            </Nav.Link>

            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>

            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}