/* eslint-disable @typescript-eslint/no-explicit-any */
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

const PageSlider = ({ sliderPhotos }: any) => {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="flex items-center justify-center -mt-10">
      <Carousel
        plugins={[autoplay.current]}
        className="lg:w-full"
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
      >
        <CarouselContent>
          {sliderPhotos.map((photo: string, index: number) => (
            <CarouselItem key={index}>
              <div className="">
                {/* <Card> */}
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-semibold">
                    <img
                      className="w-screen max-h-screen"
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
        <CarouselPrevious className="bg-yellow-400 lg:-mx-3 mx-3" />
        <CarouselNext className="bg-yellow-400 lg:-mx-3 mx-3" />
      </Carousel>
    </div>
  );
};

export default PageSlider;
