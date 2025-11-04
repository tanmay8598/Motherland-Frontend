import React from "react";

const CustomerReviewCard = ({
  name,
  review,
  rating,
  product,
  image,
  price,
  oldPrice,
}) => {
  return (
    <div className="min-w-[340px] md:min-w-[320px] lg:min-w-[360px] bg-white rounded-lg flex flex-col justify-between items-start h-[280px] py-5 text-left mx-3 overflow-hidden px-6">
      <div>
        <div className="flex mb-2">
          {Array.from({ length: rating }, (_, i) => (
            <span key={i} className="text-gray-600 text-lg">
              ★
            </span>
          ))}
        </div>

        <h3 className="text-xl md:text-xl font-bold text-gray-600 ">{name}</h3>

        <p className="text-gray-700/75 text-sm md:text-base font-normal leading-relaxed">
          {review}
        </p>
      </div>

      <div className="flex items-center justify-start gap-3 ">
        <img
          src={image}
          alt={product}
          className="w-[60px] h-[60px] object-contain rounded-md"
        />
        <div>
          <p className="font-bold text-lg text-gray-900">{product}</p>
          <div className="flex items-center gap-2 text-sm">
            <span className="line-through font-normal text-gray-900">
              ₹{oldPrice}
            </span>
            <span className="font-bold text-lg text-black">₹{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
