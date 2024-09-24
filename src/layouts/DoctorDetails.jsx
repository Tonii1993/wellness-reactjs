import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    img: "/src/assets/img/doc2.jpg",
    name: "Dr. Serena Mitchell",
    specialties: "Orthopedic Surgeon",
  },
  {
    id: 2,
    img: "/src/assets/img/doc1.jpg",
    name: "Dr. Julian Bennett",
    specialties: "Cardiologist",
  },
  {
    id: 3,
    img: "/src/assets/img/doc4.jpg",
    name: "Dr. Camila Rodriguez",
    specialties: "Pediatrician",
  },
  {
    id: 4,
    img: "/src/assets/img/doc3.jpg",
    name: "Dr. Victor Nguyen",
    specialties: "Neurologist",
  },
  {
    id: 5,
    img: "/src/assets/img/doc5.jpg",
    name: "Dr. Ethan Carter",
    specialties: "Dermatologist",
  },
  {
    id: 5,
    img: "/src/assets/img/doc6.jpg",
    name: "Dr. Olivia Martinez",
    specialties: "Ophthalmologist",
  },
];

function DoctorDetails() {
  const { id } = useParams();

  const doctorId = parseInt(id);

  const doctorData = data.find((doctor) => doctor.id === doctorId);

  if (!doctorData) {
    return <div>Doctor not found</div>;
  }

  return (
    // <div className="container mx-auto px-4 pt-20 lg:pt-30 ">
    //   <h1 className="text-3xl font-bold mb-8 pt-5">{doctorData.name}</h1>
    //   <img
    //     src={doctorData.img}
    //     alt={doctorData.name}
    //     className="w-full h-auto rounded-lg mb-8"
    //   />
    //   <p className="text-lg mb-4">{doctorData.biography}</p>
    //   {/* Display other relevant doctor information */}
    //   <div className="flex flex-col md:flex-row gap-4">
    //     <div>
    //       <h3 className="font-semibold">
    //         Specialties: {doctorData.specialties}
    //       </h3>
    //       <p>
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
    //         placeat accusantium, vel optio numquam dolor atque amet ex officia
    //         enim hic pariatur explicabo impedit minima? Maxime officiis eum
    //         cupiditate mollitia quod voluptatum deleniti atque provident minima
    //         voluptate nobis sit incidunt itaque, culpa repellat cum ipsum
    //         perferendis modi assumenda a doloremque.
    //       </p>
    //     </div>
    //     {/* Add additional details as needed */}
    //   </div>
    // </div>
    <div className="flex flex-col lg:flex-row border pt-20 lg:pt-30 border-gray-100 rounded overflow-hidden mx-4">
      <img
        src={doctorData.img}
        alt={doctorData.name}
        className="w-full lg:w-1/2 h-50 lg:h-auto object-fit pt-3"
      />
      <div className="p-4 flex flex-col items-center justify-center text-center lg:w-1/2">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{doctorData.name}</h3>
          <h6 className="text-md">({doctorData.specialties})</h6>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor
            ipsa nulla nesciunt. Laborum pariatur eos aliquid voluptatem
            voluptate debitis ipsa cupiditate! Doloribus enim magnam tempore
            obcaecati nesciunt, laborum eos quisquam accusamus aut itaque quidem
            unde fugit voluptatem sit voluptates architecto temporibus ratione
            dolores porro officiis commodi non placeat. Possimus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
