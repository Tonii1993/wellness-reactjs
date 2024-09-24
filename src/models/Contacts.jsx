import { useState } from "react";

const Contacts = ({ closeForm }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phoneNumber) return;

    const id = crypto.randomUUID();
    const newAppointment = {
      id,
      firstName,
      lastName,
      email,
      phoneNumber,
    };

    console.log(newAppointment);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    closeForm();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          className=" w-80 md:w-96 space-y-5 bg-brightColor p-5 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-semibold text-center text-black">
            Book Now
          </h1>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-backgroundColor rounded-lg"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-backgroundColor rounded-lg"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-backgroundColor rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-backgroundColor rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-row justify-between">
            <button className="bg-ExtraDarkColor text-white px-4 py-2 rounded-md hover:bg-[#5a4949] transition duration-300 ease-in-out">
              Book Appointment
            </button>
            <div>
              <button
                className="bg-red-500 text-white px-5 py-2 rounded-md active:bg-red-300"
                onClick={closeForm}
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
