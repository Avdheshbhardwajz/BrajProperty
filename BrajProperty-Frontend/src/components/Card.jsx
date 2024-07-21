import React from "react";

const Card = ({ details, img, location, pdfLink, price, propertyName }) => {
  return (
    <div className="min-w-[300px] flex flex-col items-center content-center justify-around border-2 border-white bg-[#90e0ef] font-poppins px-6 py-6 text-[#03045e] gap-y-4">
      <img
        src={img[0]} // Assuming img is an array and we're using the first image
        alt={propertyName}
        className="max-w-[250px]"
      />
      <h2 className="text-xl font-bold">{propertyName}</h2>
      <p>{details}</p>
      <div className="flex flex-row justify-between w-full">
        <h3>Location:</h3>
        <p>{location}</p>
      </div>
      <div className="flex flex-row justify-between w-full">
        <h3>Price:</h3>
        <p>₹ {price}</p>
      </div>
      <a
        href={pdfLink}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-black px-6 bg-[#03045e] py-4 text-white font-bold"
      >
        View PDF
      </a>
    </div>
  );
};

export default Card;
