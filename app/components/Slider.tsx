"use client"

import { Carousel as SingleCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 464 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function Slider({ 
  children, size 
}: {
  children: any,
  size: 'lg' | 'md' | 'sm'
}) {
  if (size === 'lg') return (
    <SingleCarousel showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      dynamicHeight={false}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      autoPlay={true}
      interval={7000}
    >
      {children}
    </SingleCarousel>
  )
  if (size === 'md') return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      swipeable={true}
      draggable={true}
      showDots={false}
      centerMode={true}
      arrows={false}
      infinite={true}
      partialVisible={false}
      autoPlaySpeed={5000}
    >
      {children}
    </Carousel>
  )

}