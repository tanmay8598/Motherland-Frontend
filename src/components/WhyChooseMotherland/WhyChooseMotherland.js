"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";

const WhyChooseMotherland = () => {
  return (
    <section className="flex my-5 flex-col font-figtree font-bold items-center py-2 bg-[#FAFAF6]">
      <h2 className="text-2xl font-bold  text-gray-950">
        Wellness in every{" "}
        <span className="text-[#E56A5C] font-bold font-figtree italic">
          Drop
        </span>
      </h2>
      <p className="text-gray-600/75 font-figtree font-normal  mt-1">
        Why Choose Motherland
      </p>

      <div className="w-full mt-4">
        <Image
          src="/productimages/whychooseus.png"
          alt="Why Choose Motherland"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default WhyChooseMotherland;
