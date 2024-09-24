import React from "react";
import { Link } from "react-router-dom";
import "./GalleryCard.css";

const GalleryCard = ({ title, image, imgName, options }) => {
  return (
    <div className="flex w-full bg-card text-card-foreground overflow-hidden shadow-lg">
      <div className="bg-SecondaryColor text-accent-foreground flex items-center justify-center w-16">
        <span className="transform -rotate-90 whitespace-nowrap text-2xl uppercase font-semibold">
          {title}
        </span>
      </div>
      <div className="container">
        <img className="image w-full object-cover" src={image} alt={imgName} />
        <div className="middle">
          {options.map((option, idx) => (
            <div className="text" key={idx}>
              {option.link ? (
                <Link to={option.link}>{option.option}</Link>
              ) : (
                option
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
