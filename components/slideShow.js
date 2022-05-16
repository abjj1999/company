import { Carousel, Button } from "react-bootstrap";
const SlideShow = () => {
  return (
    <div className="hero animate__animated animate__fadeInDown">
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className=" slide-show-image image-fluid "
            src="/images/Houston.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className=" slide-show-image image-fluid"
            src="/images/newYork.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button>Learn more</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className=" slide-show-image image-fluid"
            src="/images/miami.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlideShow;
