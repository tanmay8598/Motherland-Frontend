"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import apiClient from "./../../api/client";

const images = ["/images/bannerImage.png", "/images/bannerImage2.png"];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    getBannerImages();
  }, []);

  const getBannerImages = async () => {
    console.log("hti");
    const response = await apiClient.get("/variation/banner/get");
    console.log("get images", response);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="min-w-full relative">
            <Image
              src={img}
              alt={`Banner ${index + 1}`}
              width={1080}
              height={600}
              className="w-full h-[390px] sm:h-[390px] lg:h-[505px] object-cover"
              priority={index === 0}
            />

            {/* <div className="absolute top-20 right-2 w-[166px] h-[74px] flex items-center justify-center rounded-lg bg-[#97C0D6]/20 backdrop-blur-13">
              <p className="text-white font-semibold text-lg">
                Fresh from farm
              </p>
            </div> */}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === index
                ? "bg-gray-100 scale-110"
                : "bg-gray-100/45"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
