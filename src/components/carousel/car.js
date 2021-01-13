import { Carousel } from "react-bootstrap";
import Browse from "../../images/goldenBrowse.png";
import Chill from "../../images/goldenChill.png";
import Leaves from "../../images/goldenLeaves.png";

const Car = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Browse} alt="First slide" />
        <Carousel.Caption>
          <h3>Golden on the virtual hunt. #COVID</h3>
          <p>
            Since we're on lockdown, there's no chance of interacting with cats
            outdoors, so google images will have to do.
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
};

export default Car;
