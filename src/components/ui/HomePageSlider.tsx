import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sliderPhotos } from "@/utils/sliderPhotos";

const HomePageSlider = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="flex items-center justify-center">
      <Carousel
        plugins={[autoplay.current]}
        className="w-fit"
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
      >
        <CarouselContent>
          {sliderPhotos.map((photo, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                {/* <Card> */}
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-semibold">
                    <img
                      className="w-4/5 mx-auto"
                      src={photo}
                      alt="Sports Photos"
                    />
                  </span>
                </div>
                {/* </Card> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-yellow-400" />
        <CarouselNext className="bg-yellow-400" />
      </Carousel>
    </div>
  );
};

export default HomePageSlider;
