import React from "react";
import image from "../assets/img/blog5.jpg";

const Beauty = () => {
  return (
    <div className="flex flex-col md:flex-row  min-h-screen pt-20 items-center p-5 bg-background text-foreground">
      <div className="md:w-1/2">
        <h1 className="flex justify-center items-center text-4xl font-bold mb-4">
          Beauty Allure
        </h1>
        <p className="text-base text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente at
          vero nisi tempore maiores officiis dolor! Cupiditate impedit
          voluptates natus vitae omnis, deleniti autem sed accusantium ab
          sapiente fuga facilis!. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sapiente at vero nisi tempore maiores officiis
          dolor! Cupiditate impedit voluptates natus vitae omnis, deleniti autem
          sed accusantium ab sapiente fuga facilis!. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Sapiente at vero nisi tempore maiores
          officiis dolor! Cupiditate impedit voluptates natus vitae omnis,
          deleniti autem sed accusantium ab sapiente fuga facilis!. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Sapiente at vero nisi
          tempore maiores officiis dolor! Cupiditate impedit voluptates natus
          vitae omnis, deleniti autem sed accusantium ab sapiente fuga facilis!.
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

export default Beauty;
