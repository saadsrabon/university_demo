
import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from "../assets/images/banner_1.jpg";
import Slider2 from "../assets/images/banner_2.jpg";
import Slider3 from "../assets/images/banner_3.jpg";
import Slider4 from "../assets/images/banner_4.jpg";
import eight from "../assets/images/banner_8.jpg";
import nine from "../assets/images/banner_9.jpg";
import "../assets/css/ProductCarousel.css";

const ProductCarousel = () => {
  return (
    <Carousel className="product-carousel">
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={Slider1} alt="First slide" />
        <Carousel.Caption>
          <h3>Discover Our Latest Collection</h3>
          <p>Get ready for a stylish season.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={Slider2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Summer Fashion Trends</h3>
          <p>Stay cool and stylish this summer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={Slider3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Explore New Arrivals</h3>
          <p>Shop the latest fashion arrivals.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={Slider4} alt="Fourth slide" />
        <Carousel.Caption>
          <h3>Fall Collection</h3>
          <p>Get ready for the fall season.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={eight} alt="Fifth slide" />
        <Carousel.Caption>
          <h3>Winter Fashion</h3>
          <p>Stay warm and fashionable this winter.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={nine} alt="Sixth slide" />
        <Carousel.Caption>
          <h3>Spring Collection</h3>
          <p>Step into spring with style.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
