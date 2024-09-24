// import React from "react";
// import image from "../assets/img/womenface.jpg";

// const CardDetails = () => {
//   return (
//     <div>
//       <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-DarkColor">
//         <div className="w-full md:w-1/2 h-screen">
//           <img
//             src={image}
//             alt="face operation"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-8 ">
//           <h1 className="aesthetic-font text-6xl lg:text-8xl font-light text-gray-600">
//             Surgical
//           </h1>
//           <p className="text-3xl lg:text-5xl font-light text-gray-500 mt-2 pl-24 lg:pl-40">
//             face
//           </p>
//         </div>
//       </div>
//       <div className="p-10">
//         <h1 className="text-4xl md:text-5xl font-bold text-[#d79031] mb-6">
//           Lip Lift
//         </h1>

//         <p className="text-lg md:text-xl text-gray-700 mb-8">
//           A lip lift is a cosmetic surgical procedure designed to enhance the
//           appearance of the upper lip by reducing the distance between the nose
//           and the upper lip. This results in a more pronounced and youthful look
//           by increasing the amount of pink lip tissue that is visible. The
//           procedure is particularly popular among individuals seeking to improve
//           the balance and proportion of their facial features.
//         </p>

//         <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
//           What to Expect:
//         </h2>
//         <p className="text-lg md:text-xl font-bold text-black mb-2">
//           Procedure:
//         </p>
//         <p className="text-lg md:text-xl text-gray-700 mb-6">
//           The lip lift involves making a small incision under the base of the
//           nose (subnasal) and removing a strip of skin. This lifts the upper
//           lip, exposing more of the natural lip tissue. The procedure is
//           typically performed under local anesthesia and is minimally invasive.
//         </p>

//         <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
//           Benefits:
//         </h2>
//         <ul className="list-disc pl-6 text-lg md:text-xl text-gray-700 mb-8">
//           <li>Enhances the natural shape of the lips.</li>
//           <li>Creates a fuller and more youthful appearance.</li>
//           <li>Reduces the need for frequent lip fillers.</li>
//           <li>Improves the overall balance and harmony of facial features.</li>
//         </ul>

//         <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
//           Recovery:
//         </h2>
//         <p className="text-lg md:text-xl text-gray-700 mb-8">
//           Recovery time is relatively quick, with most patients returning to
//           normal activities within a week. Swelling and bruising are common but
//           usually subside within a few days.
//         </p>

//         <p className="text-lg md:text-xl text-gray-700 mb-8">
//           At Max Clinique, our experienced surgeons use the latest techniques to
//           ensure natural-looking results with minimal scarring. Consult with our
//           specialists to see if a lip lift is the right option for you.
//         </p>

//         <div className="mt-8">
//           <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
//             Related Procedures:
//           </h3>
//           <ul className="list-none text-2xl md:text-3xl font-bold text-black">
//             <li className="mb-4">Brow Lift</li>
//             <li className="mb-4">Bichectomy</li>
//             <li className="mb-4">Lipofilling Full Face</li>
//             <li className="mb-4">Rhinoplasty (Rhino-filler)</li>
//             <li className="mb-4">Chin Filler</li>
//             <li>Malar Filler</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDetails;

import React from "react";

const CardDetails = ({
  imageSrc,
  title,
  subtitle,
  sectionTitle,
  description,
  procedureTitle,
  procedureDetails,
  benefitsTitle,
  benefits,
  recoveryTitle,
  recoveryDetails,
  additionalInfo,
  relatedProceduresTitle,
  relatedProcedures,
}) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-DarkColor">
        <div className="w-full md:w-1/2 h-screen">
          <img
            src={imageSrc}
            alt="procedure"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-8 ">
          <h1 className="aesthetic-font text-6xl lg:text-8xl font-light text-gray-600">
            {title}
          </h1>
          <p className="text-3xl lg:text-5xl font-light text-gray-500 mt-2 pl-24 lg:pl-40">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#d79031] mb-6">
          {sectionTitle}
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8">{description}</p>

        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          {procedureTitle}
        </h2>
        <p className="text-lg md:text-xl font-bold text-black mb-2">
          Procedure:
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          {procedureDetails}
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          {benefitsTitle}
        </h2>
        <ul className="list-disc pl-6 text-lg md:text-xl text-gray-700 mb-8">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          {recoveryTitle}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          {recoveryDetails}
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-8">
          {additionalInfo}
        </p>

        <div className="mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
            {relatedProceduresTitle}
          </h3>
          <ul className="list-none text-2xl md:text-3xl font-bold text-black">
            {relatedProcedures.map((procedure, index) => (
              <li key={index} className="mb-4">
                {procedure}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
