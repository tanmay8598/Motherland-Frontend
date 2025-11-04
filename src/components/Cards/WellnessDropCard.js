import React from "react";

const WellnessDropCard = ({ title, description, image }) => {
  return (
    <div className="min-w-[290px] md:min-w-[300px] lg:min-w-[360px] bg-[#FFF1D9] rounded-xl shadow-sm flex flex-col justify-between items-start h-[370px]  py-5 text-left mx-3 overflow-hidden ">
      <div className="px-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-700/75 text-sm md:text-base font-normal leading-relaxed">
          {description}
        </p>
      </div>

      <div className="w-full flex justify-end items-end mt-4">
        <img
          src={image}
          alt={title}
          className="w-[60%] md:w-[45%] object-contain"
        />
      </div>
    </div>
  );
};

export default WellnessDropCard;
