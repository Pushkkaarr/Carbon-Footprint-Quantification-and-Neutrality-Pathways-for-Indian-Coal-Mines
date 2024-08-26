import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CarouselDemo() {
  return (
    <div className="w-full pt-10 bg-[#231E3D]">
      <Carousel
        className="carousel"
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        interval={5000}
        autoPlay={true}
      >
        <div className="flex items-center justify-between px-4" style={{ height: '80vh' }}>
          {/* First Slide */}
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-full h-full bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="co1.jpg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-full h-full bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="co2.jpeg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-full h-full bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="co3.jpg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4" style={{ height: '80vh' }}>
          {/* Second Slide */}
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-full h-full bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="https://zesty-cajeta-af510d.netlify.app/1.svg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-full h-full bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="https://zesty-cajeta-af510d.netlify.app/1.svg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-full h-full bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="https://zesty-cajeta-af510d.netlify.app/1.svg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4" style={{ height: '80vh' }}>
          {/* Third Slide */}
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-full h-full bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="https://zesty-cajeta-af510d.netlify.app/1.svg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-full h-full bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="https://zesty-cajeta-af510d.netlify.app/1.svg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-full h-full bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="https://zesty-cajeta-af510d.netlify.app/1.svg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselDemo;
