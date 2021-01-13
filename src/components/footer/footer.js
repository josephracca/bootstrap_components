import {
    // NavDropdown,
    // Nav,
    Navbar
  } from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom" className="d-flex justify-content-center">
          <Navbar.Brand href="https://www.instagram.com/goldenshour/" target="_blank">@goldenshour</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
      );
}

export default Footer;