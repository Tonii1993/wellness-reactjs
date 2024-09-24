import React from "react";

const BeforeAndAfterCard = ({
  titleOne,
  titleTwo,
  description,
  descriptionTwo,
  photoBefore,
  photoAfter,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="aesthetic-font text-3xl font-semibold text-center mb-4">
        {titleOne}
      </h2>
      <p className="text-muted-foreground text-center mb-6">{description}</p>

      <h3 className="aesthetic-font text-2xl font-bold mb-2">{titleTwo}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col items-center">
          <img
            alt={"Before" + titleTwo}
            src={photoBefore}
            className="rounded-lg w-full h-full shadow-lg object-cover"
          />
          <p className="text-muted-foreground text-center mt-2">Before</p>
        </div>
        <div className="flex flex-col items-center ">
          <img
            alt={"After" + titleTwo}
            src={photoAfter}
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
          <p className="text-muted-foreground text-center mt-2">After</p>
        </div>
      </div>

      <p className="text-muted-foreground text-center">{descriptionTwo}</p>
    </div>
  );
};

export default BeforeAndAfterCard;
