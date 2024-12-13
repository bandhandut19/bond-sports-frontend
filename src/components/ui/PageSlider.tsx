/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PageSlider = ({ sliderPhotos }: any) => {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="relative w-screen overflow-x-hidden ml-2 lg:ml-0">
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
        className="w-full h-full"
      >
        <CarouselContent className="w-full h-4/6">
          {sliderPhotos.map((photo: string, index: number) => (
            <CarouselItem key={index} className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={photo}
                alt="Sports Photos"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full" />
        <CarouselNext className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full" />
      </Carousel>
    </div>
  );
};

export default PageSlider;
