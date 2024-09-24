import React from "react";

const Location = () => {
  return (
    <div className="flex justify-center items-center pt-20 overflow-hidden">
      <iframe
        className="h-screen w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1259.9103228925303!2d19.823882214223215!3d41.317811715115425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031004526424d%3A0xae1a7f181c0ad662!2sMAX%20CLINIQUE!5e0!3m2!1sen!2s!4v1724163460395!5m2!1sen!2s"
        width="400"
        height="300"
        style={{ border: 1 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
