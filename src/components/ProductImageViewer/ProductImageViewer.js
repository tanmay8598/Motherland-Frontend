"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const ProductImageViewer = () => {
  const images = [
    "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
    "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
  ];

  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  const nextImg = () => {
    setIndex((prev) => (prev + 1) % images.length);
    scrollRef.current?.scrollBy({ left: 120, behavior: "smooth" });
  };

  const prevImg = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    scrollRef.current?.scrollBy({ left: -120, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col px-4 my-5 items-center">
      <div className="w-full max-w-md lg:w-full h-80 sm:h-[420px] bg-[#FFFAF0] flex items-center justify-center ">
        <Image
          src={images[index]}
          alt="Product image"
          width={500}
          height={500}
          className="object-contain max-h-full max-w-full"
        />
      </div>

      <div className="mt-4 w-full max-w-md flex items-center  justify-center gap-3">
        <button onClick={prevImg}>
          <Image
            src="/icons/left-icon.png"
            alt="left arrow"
            width={40}
            height={40}
            className="object-contain"
          />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto hide-scrollbar scroll-smooth px-2"
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`min-w-16 min-h-16 w-16 h-16 rounded-xl border flex items-center justify-center overflow-hidden transition ${
                i === index ? "border-black" : "border-gray-300"
              }`}
            >
              <Image
                src={img}
                alt={`thumb-${i}`}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>

        <button onClick={nextImg}>
          <Image
            src="/icons/right-icon2.png"
            alt="right arrow"
            width={40}
            height={40}
            className="object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductImageViewer;
