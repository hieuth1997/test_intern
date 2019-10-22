import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Slide from 'react-reveal/Rotate';
import slide1 from './../../assets/img/intro-slide1.jpg';
import slide2 from './../../assets/img/slider-2.jpg';
import slide3 from './../../assets/img/intro-slide3.jpg'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import './style.scss';

const items = [
  {
    src: slide1,
    altText: 'Welcome To My WebSite',
    caption: 'this  website to take part in the test internship',
    buttom: 'learn more'
  },
  {
    src: slide2,
    altText: 'Search Music',
    caption: 'Easy to Search MuSic in Itune  app of apple store',
  },
  {
    src: slide3,
    altText: 'Make your Music',
    caption: 'We are help you making the list of your music ',
  }
];

const Sider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <img src={item.src} className="custom-img" alt={item.altText} />
        <div className="container">
          <Slide left>
            <div className="caption">
              <div className="caption_line">
                <h1>{item.altText}</h1>
                <div className="description"><span>{item.caption}</span></div>
                {item.buttom ? <div className="btn-parent"> <Button className="custom-btn"  ><a  style={{color:"#ffff"}} rel="noopener noreferrer" target="_blank"  href="https://www.facebook.com/Tr%E1%BA%A7n-V%C5%A9-Job-117114286363566/">{item.buttom}</a></Button> </div> : ""}
              </div>

            </div>
          </Slide>

        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Sider;