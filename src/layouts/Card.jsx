import React from "react";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="w-full mx-auto shadow-md h-auto rounded-md overflow-hidden">
      <div className="p-4">
        {title && <div className="font-bold text-xl mb-2">{title}</div>}
        {description && (
          <p className="text-gray-700 text-base">{description}</p>
        )}
      </div>
      <img src={imageUrl} alt={title} className="w-full h-80 object-cover" />
    </div>
  );
};

export default Card;
