import React from "react";
import Slider from "react-slick";
import GalleryCard from "../layouts/GalleryCard";
import photo1 from "../assets/img/faceoprationphoto.jpg";
import Separator from "./Separator";
import { Link } from "react-router-dom";
import { RiShareForwardFill } from "react-icons/ri";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    id: 1,
    title: "Surgical",
    image: photo1,
    imgAlt: "face operation",
    options: [
      { option: "Face", link: "/surgical/face" },
      { option: "Eyes", link: "/surgical/eyes" },
      { option: "Breast", link: "/surgical/breast" },
      { option: "Body", link: "/surgical/body" },
    ],
  },
  {
    id: 2,
    title: "Breast Reconstruction",
    image: photo1,
    imgAlt: "face reconstruction",
    options: [
      { option: "Reconstruction Specialist", link: "/" }, // /breastreconstruction/reconstructionspecialist
      { option: "The Processes", link: "/" },
      { option: "Reconstruction Techniques", link: "/" },
    ],
  },
  {
    id: 3,
    title: "Exclusive livestyle",
    image: photo1,
    imgAlt: "face livestyle",
    options: [
      { option: "Live", link: "/" },
      { option: "Longevity", link: "/" },
    ],
  },
  {
    id: 4,
    title: "Beauty Allure",
    image: photo1,
    imgAlt: "face allure",
    options: [
      { option: "Facial", link: "/" },
      { option: "Injectables", link: "/" },
      { option: "Lasers", link: "/" },
      { option: "Body Contouring", link: "/" },
      { option: "Hair Restauration", link: "/" },
    ],
  },
];

const GridGallery = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="hidden md:flex justify-center items-center h-screen w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
          {cards.map((card) => (
            <div key={card.id}>
              <GalleryCard
                id={card.id}
                title={card.title}
                image={card.image}
                imgAlt={card.imgAlt}
                options={card.options}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden relative">
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card) => (
            <div key={card.id}>
              <GalleryCard
                id={card.id}
                title={card.title}
                image={card.image}
                imgAlt={card.imgAlt}
                options={card.options}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-1 right-5 flex space-x-2">
          <button
            className="bg-SecondaryColor text-white p-2 rounded-full"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </button>
          <button
            className="bg-SecondaryColor text-white p-2 rounded-full"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center h-auto my-10 px-4">
        <Link
          to="/beforeandafter"
          className="flex justify-center items-center text-white text-center w-full pointer sm:w-3/4 lg:w-1/2 py-3 sm:py-5 rounded-full bg-ExtraDarkColor"
        >
          <Separator
            className="aesthetic-font text-5xl"
            heading="View Before & Afters"
          />
          <RiShareForwardFill className="ml-3" />
        </Link>
      </div>
    </>
  );
};

export default GridGallery;
