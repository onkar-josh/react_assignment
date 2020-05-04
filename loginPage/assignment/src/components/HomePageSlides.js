import React, { useState }  from 'react';
import { Carousel } from "react-bootstrap";

function HomePageSlides() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
          style={{ padding: '0px', height: '600px' }}
            className="d-block w-100"
            src={require('../images/1.jpg')}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          style={{ padding: '0px', height: '600px' }}
            className="d-block w-100"
            src={require('../images/2.jpg')} 
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          style={{ padding: '0px', height: '600px' }}
            className="d-block w-100"
            src={require('../images/3.jpg')}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default HomePageSlides;
