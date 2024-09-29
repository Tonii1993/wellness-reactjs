import React from "react";
import image from "../assets/img/blog5.jpg";
import CallToAction from "./CallToAction";

const ExlusiveLiveStyle = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center md:px-8 xl:px-24 px-5 pt-24 gap-5">
        <div className="w-full lg:w-3/4 space-y-4">
          <h1 className="flex justify-center items-center text-4xl font-semibold text-center lg:text-start">
            ExlusiveLiveStyle
          </h1>
          <p className="text-base text-justify lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            at vero nisi tempore maiores officiis dolor! Cupiditate impedit
            voluptates natus vitae omnis, deleniti autem sed accusantium ab
            sapiente fuga facilis!. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sapiente at vero nisi tempore maiores officiis
            dolor! Cupiditate impedit voluptates natus vitae omnis, deleniti
            autem sed accusantium ab sapiente fuga facilis!. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Sapiente at vero nisi
            tempore maiores officiis dolor! Cupiditate impedit voluptates natus
            vitae omnis, deleniti autem sed accusantium ab sapiente fuga
            facilis!.
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

export default ExlusiveLiveStyle;
