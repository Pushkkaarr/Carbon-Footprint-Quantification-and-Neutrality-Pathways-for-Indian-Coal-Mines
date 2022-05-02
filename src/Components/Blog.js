import React from 'react'

function Blog() {
  return (
    <div className="bg-[#231E3D] pt-14 container mx-auto px-28">
      <h1 className="text-center text-white text-3xl">Latest From Our Blog</h1>
      <p className="text-[#696984] pt-3 text-center pb-14">
        Trusted by 5000+ companies worldwide.
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div>
          <img src="https://zesty-cajeta-af510d.netlify.app/Rectangle-32.svg" />
          <p className="text-white">Careers</p>
          <h3 className="text-white font-semibold">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </h3>
          <p className="pt-4 text-[#696984]">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <p className="pt-4 text-[#ccc] text-semibold">Read more</p>
        </div>

        <div>
          <div className="flex">
            <img src="https://zesty-cajeta-af510d.netlify.app/4.svg" />
            <div className="pl-5">
              <h4 className="text-white font-semibold">
                Class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </h4>
              <p className="text-[#696984] pt-3">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>

          <div className="flex pt-4">
            <img src="https://zesty-cajeta-af510d.netlify.app/5.svg" />
            <div className="pl-5">
              <h4 className="text-white font-semibold">
                Zoom’s earliest investors are betting millions on a better Zoom
                for schools
              </h4>
              <p className="text-[#696984] pt-3">
                Zoom was never created to be a consumer product. Nonetheless,
                the...
              </p>
            </div>
          </div>

          <div className="flex pt-4">
            <img src="https://zesty-cajeta-af510d.netlify.app/6.svg" />
            <div className="pl-5">
              <h4 className="text-white font-semibold">
                Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom
                Classrooms
              </h4>
              <p className="text-[#696984] pt-3">
                This year, investors have reaped big financial returns from
                betting on Zoom...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog