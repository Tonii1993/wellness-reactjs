import React from "react";
import img from "../assets/img/about.jpg";
import WhyUs from "./WhyUs";
import CallToAction from "./CallToAction";
import FaqsSection from "./FaqsSection";

const About = ({ openForm }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center md:px-12 xl:px-24 px-5 pt-24 gap-5">
        <div className="w-full lg:w-3/4 space-y-4">
          <h1 className="flex justify-center items-center text-4xl font-semibold text-center lg:text-start">
            About us
          </h1>
          <p className="text-justify lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            labore rerum tempore tenetur commodi natus quos itaque voluptatum
            repudiandae nostrum accusantium vero voluptate aspernatur totam,
            laboriosam aut, et quae consequatur?
          </p>
          <p className="text-justify lg:text-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            quia suscipit illum, numquam incidunt nostrum dolor officia
            doloremque cupiditate, placeat explicabo sed iure atque neque quidem
            ipsam! Dolor, minus reiciendis.
          </p>
          <p className="text-justify lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            illum. Accusantium ab expedita veniam nobis aut, in rerum
            repellendus! Exercitationem libero recusandae corrupti accusantium
            reiciendis in placeat illo maxime ea.
          </p>
        </div>
        <div className="w-full md:h-full lg:w-3/4">
          <img className="rounded-lg" src={img} alt="img" />
        </div>
      </div>
      <WhyUs />
      <FaqsSection />
      <CallToAction openForm={openForm} />
    </>
  );
};

export default About;
