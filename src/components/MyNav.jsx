import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => (
  <Navbar className="text-white" style={{ backgroundColor: "#2c235d" }}>
    <Container fluid className="">
      <Navbar.Brand href="#home" className="mb-3 text-white">
        Meteus Reactus
      </Navbar.Brand>
      <Nav className="ms-auto text-white ">
        <Nav.Link
          href="#home"
          className="text-white text-center me-3 border rounded-5 px-4 nav-btn"
        >
          Home
        </Nav.Link>
        <Nav.Link
          href="#features"
          className="text-white text-center me-3 border rounded-5 px-4 nav-btn"
        >
          Features
        </Nav.Link>
        <Nav.Link
          href="#pricing"
          className="text-white text-center border rounded-5 px-4 nav-btn"
        >
          Pricing
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNav;
