import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselBorder, CarouselContainer, CarouselText, CarouselTextButton, CarouselTextContainer } from './style';

type Props = {};

const Banner = (props: Props) => {
  return (
    <CarouselContainer>

      <CarouselBorder />

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >

        <div>
          <img
            loading="lazy"
            src="https://cdn.shopify.com/s/files/1/0011/8072/9422/files/GEN_banner_36ab20ab-a489-4897-8b8f-5a69b9dbc864.jpg?v=1669058954"
            layout="fill"
            alt="banner1"
          />
          <CarouselTextContainer>
            <CarouselText>Not sure where to go? Perfect.</CarouselText>
            <CarouselTextButton type="button">
              Shop FootWear
            </CarouselTextButton>
          </CarouselTextContainer>
        </div>

        <div>
          <img
            loading="lazy"
            src="https://cdn.shopify.com/s/files/1/0011/8072/9422/files/Untitled_design_1.png?v=1614321421"
            layout="fill"
            alt="banner2"
          />
          <CarouselTextContainer>
            <CarouselText>Not sure where to go? Perfect.</CarouselText>
            <CarouselTextButton type="button">
              Shop FootWear
            </CarouselTextButton>
          </CarouselTextContainer>
        </div>
      </Carousel>
    </CarouselContainer>
  );
};

export default Banner;
