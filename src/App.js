import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Nav,
  Button,
  Carousel,
  Container,
  Col,
  Row,
  ListGroup,
} from "react-bootstrap";
import Browse from "./images/goldenBrowse.png";
import Chill from "./images/goldenChill.png";
import Leaves from "./images/goldenLeaves.png";
import "./App.css";

//all names must start with a capital letter
// now we have to define everything...
// becase the name is the samea s the compoinent, it's running an infinite loop
// got stuck because you were using the same name for
// functional components
// keep images in the src folder...

//create another component

//PROP: property of that component

function FootOfTheBed() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
      <Navbar.Brand href="#home">Copyright 2020 | Golden's Hour</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
      </Navbar.Collapse>
    </Navbar>
  );
}

function ContsGroup() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>No style</ListGroup.Item>
            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
            <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
            <ListGroup.Item variant="success">Success</ListGroup.Item>
            <ListGroup.Item variant="danger">Danger</ListGroup.Item>
            <ListGroup.Item variant="warning">Warning</ListGroup.Item>
            <ListGroup.Item variant="info">Info</ListGroup.Item>
            <ListGroup.Item variant="light">Light</ListGroup.Item>
            <ListGroup.Item variant="dark">Dark</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

function Butts() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button variant="primary">Primary</Button>{" "}
            <Button variant="secondary">Secondary</Button>{" "}
          </Col>
          <Col>
            <Button variant="success">Success</Button>{" "}
            <Button variant="warning">Warning</Button>{" "}
          </Col>
          <Col>
            <Button variant="danger">Danger</Button>{" "}
            <Button variant="info">Info</Button>{" "}
          </Col>
          <Col>
            <Button variant="light">Light</Button>{" "}
            <Button variant="dark">Dark</Button>{" "}
            <Button variant="link">Link</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function Caro() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Browse} alt="First slide" />
        <Carousel.Caption>
          <h3>Golden on the virtual hunt. #COVID</h3>
          <p>
            Since we're on lockdown, there's no chance of interacting with cats
            outdoors, so google image search will ahve to do.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Chill} alt="Third slide" />

        <Carousel.Caption>
          <h3>Lazy Days are Here to Stay</h3>
          <p>Easy...like Sunday mornings.... oooh ooooooh.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Leaves} alt="Third slide" />

        <Carousel.Caption>
          <h3>Too Shy To Smile</h3>
          <p>
            On a walk, all I wanna do is dance on my own, no cameras please.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function Bar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Golden's Hour</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

function App() {
  return (
    <>
      <Bar />
      <Caro />
      <Butts />
      <ContsGroup />
      <FootOfTheBed />
    </>
  );
}

export default App;
