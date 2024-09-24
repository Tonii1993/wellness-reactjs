import React from "react";
import image from "../assets/img/blog5.jpg";

const ExlusiveLiveStyle = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center min-h-screen pt-16 items-center p-6 bg-background text-foreground">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">ExlusiveLiveStyle</h1>
        <p className="text-base text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente at
          vero nisi tempore maiores officiis dolor! Cupiditate impedit
          voluptates natus vitae omnis, deleniti autem sed accusantium ab
          sapiente fuga facilis!.
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

export default ExlusiveLiveStyle;
