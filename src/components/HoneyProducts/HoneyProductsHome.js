"use client";

import React, { useState, useEffect } from "react";
import HoneyCard from "./../Cards/HoneyCardHome";

const HoneyProductsHome = () => {
  const honeyItems = [
    {
      image: "/productImages/honey1.png",
      title: "Sundarbun Honey",
      reviews: 2807,
      description: "Infused with real orange peel, bright & refreshing",
      oldPrice: 699,
      newPrice: 549,
      weight: "250g",
    },
    {
      image: "/productImages/honey1.png",
      title: "Acacia Honey",
      reviews: 2807,
      description: "Infused with real orange peel, bright & refreshing",
      oldPrice: 699,
      newPrice: 549,
      weight: "250g",
    },
    {
      image: "/productImages/honey1.png",
      title: "Acacia Honey",
      reviews: 2807,
      description: "Infused with real orange peel, bright & refreshing",
      oldPrice: 699,
      newPrice: 549,
      weight: "250g",
    },
    {
      image: "/productImages/honey1.png",
      title: "Acacia Honey",
      reviews: 2807,
      description: "Infused with real orange peel, bright & refreshing",
      oldPrice: 699,
      newPrice: 549,
      weight: "250g",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(honeyItems.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const visibleItems = honeyItems.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="flex flex-col font-figtree font-bold items-center py-5 bg-white">
      <h2 className="text-2xl font-bold  text-gray-950">
        Nature’s{" "}
        <span className="text-[#E56A5C] font-bold font-figtree italic">
          Sweetest
        </span>{" "}
        Gifts
      </h2>
      <p className="text-gray-600/75 font-figtree font-normal  mt-1">
        Now in your home
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-5">
        {honeyItems.map((item, index) => (
          <HoneyCard key={index} {...item} />
        ))}
      </div>

      <div className="flex justify-center mt-5 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
              currentIndex === index ? "bg-gray-300" : "bg-[#B3B3B34D]"
            }`}
          ></div>
        ))}
      </div>

      <button className="mt-6 w-[calc(100%-2rem)] mx-auto py-2 border border-[#F5C056] bg-[#FFF6E5] rounded-full text-gray-900 font-medium hover:bg-[#FFE7CB] transition">
        Shop All
      </button>
    </section>
  );
};

export default HoneyProductsHome;
