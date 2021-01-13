import {
    Button,
    Container,
    Col,
    Row
  } from "react-bootstrap";

const Buttons = () => {
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

export default Buttons;