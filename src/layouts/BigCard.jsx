import React from "react";

const BigCard = ({ title, description, imageSrc }) => {
  return (
    <div className="px-4 py-16 flex justify-center items-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-8 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col justify-center lg:order-2">
          <div className="max-w-xl mb-6">
            <h2 className="aesthetic-font max-w-lg mb-6 text-4xl text-center text-gray-800 md:text-5xl lg:text-6xl 2xl:text-6xl ">
              {title}
            </h2>
            <p className="text-base text-gray-700 md:text-lg lg:text-xl 2xl:text-2xl">
              {description}
            </p>
          </div>
        </div>
        <div className="lg:order-2">
          <img
            className="object-cover w-full h-56 rounded-xl shadow-lg sm:h-96 lg:h-auto lg:max-h-96 2xl:max-h-full"
            src={imageSrc}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
