import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";
import doc3 from "../assets/img/doc3.jpg";
import doc4 from "../assets/img/doc4.jpg";
import doc5 from "../assets/img/doc5.jpg";
import doc6 from "../assets/img/doc6.jpg";

const ExpertTeam = () => {
  const data = [
    {
      id: 1,
      img: doc2,
      name: "Dr. Serena Mitchell",
      specialties: "Orthopedic Surgeon",
    },
    {
      id: 2,
      img: doc1,
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      id: 3,
      img: doc4,
      name: "Dr. Camila Rodriguez",
      specialties: "Pediatrician",
    },
    {
      id: 4,
      img: doc3,
      name: "Dr. Victor Nguyen",
      specialties: "Neurologist",
    },
    {
      id: 5,
      img: doc5,
      name: "Dr. Ethan Carter",
      specialties: "Dermatologist",
    },
    {
      id: 6,
      img: doc6,
      name: "Dr. Olivio Martinez",
      specialties: "Ophthalmologist",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <div className="flex flex-col justify-center lg:px-30 h-auto my-10 px-5 2xl:mt-20">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="aesthetic-font text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-brightColor text-backgroundColor px-4 py-2 rounded-lg active:bg-[#e9f0ee]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-brightColor text-backgroundColor px-4 py-2 rounded-lg active:bg-[#e9f0ee]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="slider-container mt-8 ">
        <Slider ref={slider} {...settings}>
          {data.map((doctor) => (
            <Link
              key={doctor.id}
              to={`/doctor/${doctor.id}`}
              className="h-[350px] 2xl:h-[530px] xl:h-[380px] md:h-[350px] lg:h-[300px] text-black rounded-xl  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
            >
              <div>
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="rounded-t-xl w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{doctor.name}</h1>
                <h3 className="pt-2">{doctor.specialties}</h3>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExpertTeam;
