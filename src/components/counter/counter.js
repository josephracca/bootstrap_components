// let's import the proper modules from bootstrap

import { Button, Container, Col, Row } from "react-bootstrap";

let theeNum = 0;

let numDisplay = document.getElementById("numDisplay");

const Counter = () => {
  return (
    //2 buttons and a text area or a third button that can change information inside based on counter
    <>
      <Container className="mt-5 pb-5">
        <Row>
          <Col className="d-flex justify-content-center">
          <Button className="mx-2" variant="secondary" onClick={divTwo}>
              / 2
            </Button>
            <Button className="mx-2" variant="success" onClick={incrementNum}>
              !SUBTRACT
            </Button>
            <Button
              className="mx-2"
              variant="info"
              id="numDisplay"
              onClick={displayCurrent}
            >
              START AT: {theeNum}
            </Button>
            <Button className="mx-2" variant="danger" onClick={decrementNum}>
              !ADD
            </Button>
            <Button className="mx-2" variant="warning" onClick={multiply100}>
              ×100
            </Button>
            <Button className="mx-2" variant="dark" onClick={resetNum}>
              RE: ZERO
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

function incrementNum() {
  theeNum++;
  numDisplay.innerText = theeNum;
}

function decrementNum() {
  theeNum--;
  numDisplay.innerText = theeNum;
}

function resetNum() {
    theeNum = 0;
    numDisplay.innerText = `BACK TO: ${theeNum}`;
  }

function multiply100() {
  if (theeNum === 0) {
    alert(`You basically just wasted a click.. returned: ${theeNum}`);
  } else {
    theeNum *= 100;
    numDisplay.innerText = theeNum;
  }
}

function divTwo(){
    theeNum /= 2;
    numDisplay.innerText=theeNum%2;
}

function displayCurrent() {
  alert(
    `Curious what happens when you click me huh? (I understand, I am a button after all...) Well here's the current count. That's all I have for you. Just the facts. No fake news here: ${theeNum}`
  );
}

export default Counter;
