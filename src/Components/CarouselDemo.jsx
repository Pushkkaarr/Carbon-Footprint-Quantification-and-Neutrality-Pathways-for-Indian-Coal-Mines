import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CarouselDemo() {
  return (
    <div className="w-full  bg-[#231E3D]">
      <Carousel
        className="carousel"
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        interval={50000000000000000}
        autoPlay={true}
      >
        <div className="flex items-center justify-between px-4" style={{ height: '50vh' }}>
          {/* First Slide */}
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-[400px] h-[200px] rounded-xl  bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="co1.jpg"
                alt="Image"
                className="object-cover "
              />
            </div>
          </div>
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-[400px] h-[200px] rounded-xl bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="co2.jpeg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-[400px] h-[200px] rounded-xl bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="co3.jpg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4" style={{ height: '50vh' }}>
          {/* First Slide */}
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-[400px] h-[200px] rounded-xl  bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582377224944-2c2a17affa38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcmJvbnxlbnwwfDB8MHx8fDA%3D"
                alt="Image"
                className="object-cover "
              />
            </div>
          </div>
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-[400px] h-[200px] rounded-xl bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661898205432-d648667b9c76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYm9ufGVufDB8MHwwfHx8MA%3D%3D"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-[400px] h-[200px] rounded-xl bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1691623819060-3a507957e586?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyYm9ufGVufDB8MHwwfHx8MA%3D%3D"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-4" style={{ height: '50vh' }}>
          {/* First Slide */}
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-[400px] h-[200px] rounded-xl  bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="co1.jpg"
                alt="Image"
                className="object-cover "
              />
            </div>
          </div>
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-[400px] h-[200px] rounded-xl bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="co2.jpeg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 mx-2 flex justify-center items-center">
            <div className="w-[400px] h-[200px] rounded-xl bg-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src="co3.jpg"
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