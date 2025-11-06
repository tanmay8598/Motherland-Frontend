"use client";
import React from "react";
import Image from "next/image";

const WhyChooseMotherland = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-around font-figtree bg-[#FAFAF6] py-8 my-5">
      <div className="text-center lg:text-left mb-6 lg:mb-0">
        <h2 className="text-2xl lg:text-5xl font-bold text-gray-950">
          Wellness in every{" "}
          <span className="text-[#E56A5C] italic font-bold">Drop</span>
        </h2>
        <p className="text-gray-600/75 lg:text-4xl font-normal mt-1">
          Why Choose Motherland
        </p>
      </div>

      <div className="w-full lg:w-1/2">
        <Image
          src="/productimages/whychooseus.png"
          alt="Why Choose Motherland"
          width={1920}
          height={535}
          className="w-full h-auto lg:h-[535px] object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default WhyChooseMotherland;
