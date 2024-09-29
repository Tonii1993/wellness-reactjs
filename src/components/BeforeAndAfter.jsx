import React from "react";
import BeforeAndAfterCard from "./BeforeAndAfterCard";
import faceBefore from "../assets/img/FaceBeforeSurgery.jpg";
import faceAfter from "../assets/img/faceAfterSurgery.jpg";
import CallToAction from "./CallToAction";

const BeforeAndAfter = ({ openForm }) => {
  const compareDatas = [
    {
      id: 1,
      titleOne: "FILLER BEFORE AND AFTERS",
      titleTwo: "LIP FILLER",
      photoBefore: faceBefore,
      photoAfter: faceAfter,
      description:
        "As we age, we lose volume in our face. Fillers are used to replenish that youthful volume in a variety of areas: lips, under eye, chin, jawline, temple, cheeks, and more. They can also be used to simply add volume to those areas you feel are not full enough.Mint & Needle also specializes in using fillers to contour cheeks and sharpen the jawline! See below for beautiful results that can come from a lip filler appointment.",
      descriptionTwo:
        "Lip fillers were used on this client through multiple sessions to add more volume to her lips. It is important to note that multiple sessions are needed for smaller lips as they need to be slowly built up.",
    },
    {
      id: 2,
      titleTwo: "Facial Rebalancing",
      photoBefore: faceAfter,
      photoAfter: faceBefore,
      descriptionTwo:
        "This client took advantage of Mint & Needle’s signature facial balancing with fillers treatment to restore her entire face.  ",
    },
    {
      id: 3,
      titleOne: "XXXXX BEFORE AND AFTERS",
      titleTwo: "XXXXX",
      photoBefore: faceBefore,
      photoAfter: faceAfter,
      description: "XXX XXX XXX XXX",
      descriptionTwo: "CCC CCC CCC CC",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between items-center xl:px-32 px-5 pt-24 lg:pt-18 gap-5">
        <div className="flex-col justify-center lg:px-24">
          <h1 className="aesthetic-font text-center font-bold text-7xl py-10">
            Our Most Dramatic Medical Aesthetic Before and Afters
          </h1>
          <p>
            Who doesn’t love a good before and after? At Mint & Needle, we
            strive to provide high-quality medical-grade treatments and products
            to our clients so they can see the best results possible. Keep
            reading to see our absolute favorite before and afters, and learn
            about the services and products used to get each amazing result!{" "}
          </p>
        </div>

        {compareDatas.map((comparedata) => (
          <div key={comparedata.id}>
            <BeforeAndAfterCard {...comparedata} />
          </div>
        ))}
      </div>
      <CallToAction openForm={openForm} />
    </>
  );
};

export default BeforeAndAfter;
