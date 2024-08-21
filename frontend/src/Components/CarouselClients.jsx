import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const reviews = [
  {
    imageSrc: "https://zesty-cajeta-af510d.netlify.app/image-33.svg",
    title: "Innovative Solutions That Exceed Expectations",
    description: "Our experience with CARBON has been nothing short of exceptional. Their expertise in software development and dedication to meeting our needs have been key to the success of our project. Highly recommend!",
    name: "Alex Smith",
    position: "Chief Innovation Officer, Tech Corp"
  },
  {
    imageSrc: "p2.jpeg",
    title: "A Partner You Can Trust",
    description: "CARBON's team has been a vital part of our growth strategy. Their proactive approach and commitment to excellence have made a significant impact on our business operations. We're excited to continue this partnership.",
    name: "Emily Johnson",
    position: "Head of IT, Innovate Inc."
  },
  {
    imageSrc: "p1.jpeg",
    title: "Exceptional Service and Support",
    description: "The CARBON team consistently delivers high-quality work with outstanding support. Their attention to detail and customer service make them stand out in the industry. We look forward to future projects together.",
    name: "Michael Brown",
    position: "Director of Technology, Solutions Ltd."
  }
];

function ReviewCard({ imageSrc, title, description, name, position }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 lg:p-12 bg-[#2D2D2D] rounded-lg shadow-lg">
      <img
        src={imageSrc}
        alt="Client"
        className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover mb-4 lg:mb-0 lg:mr-8"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <div className="text-left">
        <div className="text-transparent bg-clip-text bg-gradient-to-b from-[#6664F1] to-[#C94AF0] text-6xl lg:text-9xl rotate-6 mb-4">
          "
        </div>
        <h1 className="text-white lg:text-3xl text-2xl font-semibold mb-2">
          {title}
        </h1>
        <p className="pt-4 text-[#ccc] mb-4">
          {description}
        </p>
        <h2 className="text-white text-xl font-bold">{name}</h2>
        <p className="text-[#696984]">{position}</p>
      </div>
    </div>
  );
}

function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="pt-10 bg-[#231E3D] px-4">
      <div className="container mx-auto flex flex-col items-center relative">
        <ReviewCard
          imageSrc={reviews[currentIndex].imageSrc}
          title={reviews[currentIndex].title}
          description={reviews[currentIndex].description}
          name={reviews[currentIndex].name}
          position={reviews[currentIndex].position}
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={prevReview}
            className="bg-[#6664F1] text-white p-2 rounded-full shadow-lg hover:bg-[#5553D1] transition"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={nextReview}
            className="bg-[#6664F1] text-white p-2 rounded-full shadow-lg hover:bg-[#5553D1] transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewCarousel;
