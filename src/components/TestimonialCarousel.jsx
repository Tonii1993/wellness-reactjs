import React from "react";
import Slider from "react-slick";
import VideoCard from "../layouts/VideoCard";
import video1 from "../../src/assets/videos/ambient-lake.mp4";
import video2 from "../../src/assets/videos/ambientnature-atmosphere.mp4";
import video3 from "../../src/assets/videos/blowing.mp4";

const items = [
  {
    id: 1,
    title: "Ben",
    videourl: video1,
  },
  {
    id: 2,
    title: "Ana",
    videourl: video2,
  },
  {
    id: 3,
    title: "Tom",
    videourl: video3,
  },
  {
    id: 4,
    title: "Eri",
    videourl: video2,
  },
  {
    id: 5,
    title: "Ori",
    videourl:
      "//www.youtube.com/watch?v=WSSW9GeT9eQ&list=PLoGBYFjcuU_uboY1nbwF1LZQ9WV8F9HAO&index=5",
  },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        backgroundColor: "transparent",
        right: "5px",
        top: "60%",
        transform: "translateY(-50%)",
        zIndex: 1,
        position: "absolute",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-10 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        backgroundColor: "transparent",
        left: "5px",
        top: "60%",
        transform: "translateY(-50%)",
        zIndex: 1,
        position: "absolute",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-10 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}

function TestimonialCarousel() {
  const sliderRef = React.useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="relative flex justify-center items-center mb-8">
      <div className="slider-container h-auto w-5/6 md:w-11/12">
        <div className="flex flex-col m-5 h-fit">
          <h4 className="aesthetic-font text-center my-2 text-3xl lg:text-5xl 2xl:text-6xl">
            Video <strong>Testimonials</strong>
          </h4>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {items.map((item) => (
            <div key={item.id} className="p-2">
              <VideoCard
                id={item.id}
                title={item.title}
                videourl={item.videourl}
              />
            </div>
          ))}
        </Slider>
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
      </div>
    </div>
  );
}

export default TestimonialCarousel;
