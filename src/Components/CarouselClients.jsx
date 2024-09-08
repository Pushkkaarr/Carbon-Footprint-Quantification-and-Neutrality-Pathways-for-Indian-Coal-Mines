import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const initialReviews = [
  {
    imageSrc: "https://zesty-cajeta-af510d.netlify.app/image-33.svg",
    title: "Innovative Solutions That Exceed Expectations",
    description: "Our experience with CARBON has been nothing short of exceptional. Their expertise in software development and dedication to meeting our needs have been key to the success of our project. Highly recommend!",
    name: "Soham Smith",
    position: "Chief Innovation Officer"
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
  const [reviews, setReviews] = useState(initialReviews);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const [newReview, setNewReview] = useState({
    imageSrc: '',
    title: '',
    description: '',
    name: '',
    position: ''
  });
  const [imagePreview, setImagePreview] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setNewReview((prevReview) => ({
          ...prevReview,
          imageSrc: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setNewReview({
      imageSrc: '',
      title: '',
      description: '',
      name: '',
      position: ''
    });
    setImagePreview('');
    setIsFormVisible(false); // Hide form after submission
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

        {/* Add Review Button */}
        <div className="mt-12">
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="px-6 py-3 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-[#66C5CC] hover:bg-[#55B2B6] focus:outline-none focus:ring-2 focus:ring-[#55B2B6]"
          >
            {isFormVisible ? 'Hide Form' : 'Add Review'}
          </button>
        </div>

        {/* Add Review Form */}
        {isFormVisible && (
          <div className="mt-8 max-w-3xl w-full p-6 bg-[#2D2D2D] rounded-lg shadow-lg mx-auto">
            <h2 className="text-2xl font-semibold text-[#66C5CC] mb-4 text-center">Add a Review</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
              <div className="mb-4">
                <label className="block text-[#66C5CC] mb-2">Choose an image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#66C5CC] file:text-white hover:file:bg-[#55B2B6]"
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mt-4 max-w-xs rounded-lg"
                  />
                )}
              </div>
              <input
                type="text"
                name="title"
                value={newReview.title}
                onChange={handleChange}
                placeholder="Review Title"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66C5CC] text-lg placeholder-black"
              />
              <textarea
                name="description"
                value={newReview.description}
                onChange={handleChange}
                placeholder="Review Description"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66C5CC] text-lg placeholder-black h-40"
              />
              <input
                type="text"
                name="name"
                value={newReview.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66C5CC] text-lg placeholder-black"
              />
              <input
                type="text"
                name="position"
                value={newReview.position}
                onChange={handleChange}
                placeholder="Your Position"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66C5CC] text-lg placeholder-black"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-[#66C5CC] hover:bg-[#55B2B6] focus:outline-none focus:ring-2 focus:ring-[#55B2B6]"
              >
                Submit Review
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewCarousel;
