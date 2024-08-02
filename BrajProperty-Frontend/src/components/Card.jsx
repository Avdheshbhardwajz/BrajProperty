import React from "react";

const Card = ({ details, img, location, pdfLink, price, propertyName }) => {
  const imgLink = img[0]; // Assuming the first link in the array

  // Check if the link is a Google Drive link and convert it to the preview link format if necessary
  const convertToPreviewLink = (link) => {
    try {
      if (link.includes("drive.google.com")) {
        const fileId = link.split("/d/")[1].split("/")[0];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    } catch (error) {
      console.error("Failed to convert Google Drive link:", error);
    }
    return link; // Return the original link if it's not a Google Drive link
  };

  const previewImgLink = convertToPreviewLink(imgLink);

  return (
    <div className="min-w-[350px] max-w-[350px] flex flex-col items-center content-center justify-around border-2 border-[#b4973a] bg-[#f2f3f2] font-poppins px-6 py-6 text-[#b4973a] gap-y-4">
      <iframe
        src={previewImgLink}
        title={propertyName}
        className="max-w-[250px] h-[250px]"
      />
      {console.log(previewImgLink)}
      <h2 className="text-xl font-bold">{propertyName}</h2>
      <p>{details}</p>
      <div className="flex flex-row justify-between w-full">
        <h3>Location:</h3>
        <p>{location}</p>
      </div>
      {/* <div className="flex flex-row justify-between w-full">
        <h3>Price:</h3>
        <p>₹ {price}</p>
      </div> */}
      <a
        href={pdfLink}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2  px-6 bg-[#b4973a] py-4 text-white font-bold"
      >
        View PDF
      </a>
    </div>
  );
};

export default Card;
