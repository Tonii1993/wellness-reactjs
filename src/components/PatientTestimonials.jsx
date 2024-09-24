import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const PatientTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      className="max-h-screen text-center bg-cover bg-center py-12 2xl:mt-18"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3942924/pexels-photo-3942924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="mx-auto px-4 lg:px-24 xl:px-48 2xl:px-32">
        <div className="heading text-white mb-12 relative">
          <h2 className="text-3xl lg:text-5xl 2xl:text-6xl aesthetic-font uppercase">
            Patient Testimonial
          </h2>
          <div
            className="absolute top-15 left-1/2 transform -translate-x-1/2 h-10 w-44 bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/d7tSD1R/heading-line-white.png')",
            }}
          ></div>
        </div>
        <Slider {...settings}>
          <div className="carousel-item">
            <div className="testimonial4_slide mx-auto p-5 text-center">
              <img
                src="https://i.ibb.co/8x9xK4H/team.jpg"
                alt="Client 1"
                className="w-24 h-22 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto shadow-lg"
              />
              <p className="text-white text-base sm:text-lg lg:text-xl my-4 sm:my-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h4 className="text-white text-lg sm:text-xl lg:text-2xl">
                ~ A.A.
              </h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="testimonial4_slide mx-auto p-5 text-center">
              <img
                src="https://i.ibb.co/8x9xK4H/team.jpg"
                alt="Client 2"
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto shadow-lg"
              />
              <p className="text-white text-base sm:text-lg lg:text-xl my-4 sm:my-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h4 className="text-white text-lg sm:text-xl lg:text-2xl">
                ~ B.B.
              </h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="testimonial4_slide mx-auto p-5 text-center">
              <img
                src="https://i.ibb.co/8x9xK4H/team.jpg"
                alt="Client 3"
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto shadow-lg"
              />
              <p className="text-white text-base sm:text-lg lg:text-xl my-4 sm:my-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h4 className="text-white text-lg sm:text-xl lg:text-2xl">
                ~ C.C
              </h4>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-xl sm:text-2xl lg:text-3xl cursor-pointer z-10"
    onClick={onClick}
  >
    <AiOutlineRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-xl sm:text-2xl lg:text-3xl cursor-pointer z-10"
    onClick={onClick}
  >
    <AiOutlineLeft />
  </div>
);

export default PatientTestimonials;
