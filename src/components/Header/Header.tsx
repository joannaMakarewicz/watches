import React from 'react';
import bcg from "../../assets/background.png";
import bcg2 from "../../assets/bcg2.png";
import bcg3 from "../../assets/bcg3.png";
import "../Header/Header.scss";
import Carousel from 'react-bootstrap/Carousel';

const Header = () => {
  return (
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bcg}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bcg2}
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bcg3}
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

  )
}

export default Header;
