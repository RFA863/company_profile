"use client";

import Image from "next/image";
import Content3 from "../../public/image/Content3.png";
import Content4_1 from "../../public/image/Content4_1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Content() {
  // const nextArrow = () => <div>Kanan</div>;

  // const prevArrow = () => <div>Kanan</div>;

  return (
    <>
      <div className="relative select-none" id="content4">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showStatus={false}
          showThumbs={false}
          // renderArrowNext={nextArrow}
          // renderArrowPrev={prevArrow}
        >
          <div>
            <Image
              src={Content4_1}
              className="sm:w-screen sm:h-screen"
              alt="carrousel-1"
            />
          </div>
          <div>
            <Image
              src={Content3}
              className="sm:w-screen sm:h-screen"
              alt="carrousel-2"
            />
          </div>
          <div>
            <Image
              src={Content3}
              className="sm:w-screen sm:h-screen"
              alt="carrousel-2"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}
