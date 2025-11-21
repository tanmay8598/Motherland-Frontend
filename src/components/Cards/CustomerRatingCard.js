import React from "react";
import Image from "next/image";

function CustomerRatingCard({ name, date, rating, title, review, response }) {
  return (
    <div className="bg-[#F7F7F7] w-full rounded-xl p-5 lg:p-8 ">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Image
              src="/icons/user.png"
              alt="user icon"
              width={32}
              height={32}
            />
          </div>

          <div>
            <p className="font-bold text-[#4D4D4D] text-p2-mobile lg:text-[18px]">
              {name}
            </p>
            <p className="text-sm text-[#CE7910] font-normal">
              Verified Customer
            </p>
          </div>
        </div>

        <p className="text-sm text-[#4D4D4D]">{date}</p>
      </div>

      <div className="flex items-center gap-1 mt-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Image
            key={i}
            src="/icons/rating-star.png"
            alt="star"
            width={20}
            height={20}
            className="lg:w-[22px] lg:h-[22px]"
          />
        ))}

        <p className="font-bold text-base   lg:text-[20px] text-[#4D4D4D]">
          {title}
        </p>
      </div>

      <div className="hidden lg:block w-full h-px bg-[#4D4D4D] my-4"></div>

      <p className="text-[#4D4D4D] leading-relaxed text-p2-mobile  mt-3">
        {review}
      </p>

      <div className=" hidden lg:block border-l-4 border-gray-300 mt-5 pl-4">
        <p className="font-semibold text-gray-900 text-[15px]">
          Response from O Positiv
        </p>
        <p className="text-gray-700 mt-1 text-[14px]">{response}</p>
      </div>
    </div>
  );
}

export default CustomerRatingCard;
