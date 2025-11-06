import React from "react";

const HoneyCard = ({
  image,
  title,
  reviews,
  description,
  oldPrice,
  newPrice,
  weight,
}) => {
  return (
    <div className="bg-[#FAFAF6] rounded-[20px]   overflow-hidden w-[172px] lg:w-60 flex flex-col items-center ">
      <img
        src={image}
        alt={title}
        className="rounded-tl-[20px] w-full min:h-[172px] object-cover"
      />
      <div className="my-4 px-2  w-full">
        <h3 className="text-p2-mobile  font-semibold text-gray-700">{title}</h3>

        <div className="flex justify-between items-center mt-1">
          <div className="flex space-x-2px">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#E58103"
                className="w-3 h-3"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.386-2.462a1 1 0 00-1.176 0l-3.386 2.462c-.784.57-1.838-.196-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.288-3.967z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-900">{reviews} Reviews</span>
        </div>

        <p className="text-sm text-gray-600 mt-1">{description}</p>

        <p className="text-sm mt-2 font-normal text-gray-900">
          Starting from <br />
          <span className="line-through text-[#E35036] text-[13px] mr-1">
            ₹{oldPrice}
          </span>
          <span className="text-gray-700  font-bold">₹{newPrice}</span>
        </p>

        <p className="text-sm text-gray-600 font-medium mt-1">{weight}</p>

        <button className="bg-[#E56A5C] text-white font-semibold w-full py-2 h-9 rounded-full text-sm mt-3">
          VIEW PRODUCT
        </button>
      </div>
    </div>
  );
};

export default HoneyCard;
