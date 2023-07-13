"use client"

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider({ children, styles }: any) {
  return (
    <Carousel showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      dynamicHeight={false}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={7000}
    >
      {children}
    </Carousel>
  )
}