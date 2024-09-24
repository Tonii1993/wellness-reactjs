import React from "react";
import image from "../assets/img/blog5.jpg";

const BreastRecontruction = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-20 items-center p-6 bg-background text-foreground">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Breast Reconstruction</h1>
        <p className="text-base text-muted-foreground mb-6">
          Breast reconstruction surgery is a surgical procedure to recreate the
          breasts after a mastectomy procedure has removed one or both of them.
        </p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          alt="Woman looking in mirror"
          src={image}
          className="rounded-lg shadow-lg "
        />
      </div>
    </div>
  );
};

export default BreastRecontruction;
