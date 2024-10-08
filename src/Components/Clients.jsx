import React from "react";
import CarouselClients from "./CarouselClients";
import Fade from "react-reveal/Fade";

function Clients() {
  return (
    <div>
      <div className="bg-[#231E3D] pt-14   lg:px-28 px-10 pb-10">
        <Fade bottom cascade>
          <h1 className="lg:text-3xl text-white text-center text-3xl font-semibold whitespace-nowrap">
            Feedback/Review
          </h1>
          

          <CarouselClients />
        </Fade>
      </div>
    </div>
  );
}

export default Clients;
