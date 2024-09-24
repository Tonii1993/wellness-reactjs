import React from "react";
import photo from "../assets/img/pexels-minan.jpg";
import "./CallToAction.css";

const CallToAction = ({ openForm }) => {
  const handleOpenForm = () => {
    openForm();
  };

  return (
    <div className="flex relative h-96 w-full ">
      <img
        src={photo}
        alt="consultation-banner"
        className="w-full h-full object-cover bg-opacity-35"
      />
      <div className="absolute inset-y-0 top-10 -right-10 lg:inset-y-0 md:inset-y-0 md:right-5 lg:right-5 flex flex-col justify-center items-center text-center text-white md:mr-15 lg:mr-20">
        <div className="w-500 mr-16 2xl:w-5/6 2xl:h-800">
          <button
            onClick={handleOpenForm}
            className="btnContact bg-white text-black font-bold py-1 px-3 md:py-2 md:px-8 2xl:py-5 md:text-2xl 2xl:px-10 2xl:text-4xl rounded-full mb-4 transition duration-300 ease-in-out hover:bg-gray-200"
          >
            Contact us
          </button>
          <h1 className="headerOne text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-semibold">
            Schedule
          </h1>
          <h2 className="headerTwo text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-semibold">
            your
          </h2>
          <h3 className="headerThree text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-semibold">
            consultation
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
