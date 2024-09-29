import React from "react";
import image from "../assets/img/blog5.jpg";
import CallToAction from "./CallToAction";

const BreastRecontruction = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center md:px-12 xl:px-24 px-5 pt-24 gap-5">
        <div className="w-full lg:w-3/4 space-y-4">
          <h1 className="flex justify-center items-center text-4xl font-semibold text-center lg:text-start">
            Breast Reconstruction
          </h1>
          <p className="text-base text-justify lg:text-start">
            Breast reconstruction surgery is a surgical procedure to recreate
            the breasts after a mastectomy procedure has removed one or both of
            them. Breast reconstruction surgery is a surgical procedure to
            recreate the breasts after a mastectomy procedure has removed one or
            both of them. Breast reconstruction surgery is a surgical procedure
            to recreate the breasts after a mastectomy procedure has removed one
            or both of them. Breast reconstruction surgery is a surgical
            procedure to recreate the breasts after a mastectomy procedure has
            removed one or both of them. Breast reconstruction surgery is a
            surgical procedure to recreate the breasts after a mastectomy
            procedure has removed one or both of them.
          </p>
        </div>
        <div className="w-full md:h-full lg:w-3/4">
          <img
            alt="Woman looking in mirror"
            src={image}
            className="rounded-lg"
          />
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default BreastRecontruction;
