"use client";
import Image from "next/image";
import React from "react";

const RegularVsMotherland = () => {
  return (
    <section className="w-full flex flex-col items-center py-5 font-figtree">
      <div className="relative w-full bg-[#FFE4B5] max-w-5xl flex flex-row items-stretch rounded-xl overflow-hidden">
        <div className="w-1/2 px-4 py-8 flex flex-col justify-start relative">
          <div className="bg-white  rounded-md py-2 text-center md:text-left">
            <h3 className="text-sm px-4 md:text-xl font-bold text-[#0F8643] whitespace-nowrap">
              Motherland Honey
            </h3>
          </div>

          <ul className="space-y-3 mt-5">
            {[
              "Single-origin floral sources",
              "No added syrups/stabilizers",
              "Lab-tested & certified for purity",
              "Traceability from farm to bottle",
              "Premium glass packaging (no plastic)",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Image
                  src="/icons/check.png"
                  alt="check icon"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                <span className="text-gray-800 font-semibold text-sm md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-[200px] flex justify-center items-center">
          <div className="absolute top-0 bottom-0 w-0.5 bg-white"></div>
          <Image
            src="/images/comparehoney.png"
            alt="Honey Center"
            width={114}
            height={174}
            className="z-10 object-contain"
          />
        </div>

        <div className="w-1/2 px-6 py-8 flex flex-col justify-start relative">
          <div className="bg-white rounded-md py-2 text-center md:text-left ">
            <h3 className="text-sm px-2 md:text-xl font-bold text-[#BA2D2D] whitespace-nowrap">
              Regular Honey
            </h3>
          </div>

          <ul className="space-y-3 mt-5">
            {[
              "Unknown sources",
              "Often diluted with sugar syrups",
              "Not transparent about tests",
              "No transparency of source",
              "Plastic jars with BPA risk",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Image
                  src="/icons/cross.png"
                  alt="cross icon"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                <span className="text-gray-800 font-semibold text-sm md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RegularVsMotherland;
