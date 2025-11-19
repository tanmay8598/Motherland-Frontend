import React from "react";
import Image from "next/image";

function CustomerRatingCard({ name, date, rating, title, review }) {
  return (
    <div className="bg-[#F7F7F7] font-figtree p-5 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex  items-center justify-center text-lg font-semibold text-gray-700">
            {name.charAt(0)}
          </div>

          <div>
            <p className="font-semibold text-gray-800">{name}</p>
            <p className="text-xs text-[#CE7910] font-medium">
              Verified Customer
            </p>
          </div>
        </div>

        <span className="text-xs text-gray-500">{date}</span>
      </div>

      <div className="flex items-center mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Image
            key={i}
            src="/icons/filled-star.png"
            alt="star"
            width={16}
            height={16}
          />
        ))}
      </div>

      <p className="font-semibold text-gray-800 mb-2">{title}</p>

      <hr className="my-2" />

      <p className="text-gray-700 text-sm leading-relaxed">{review}</p>
    </div>
  );
}

export default CustomerRatingCard;
