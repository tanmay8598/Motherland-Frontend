"use client";

import React, { useState, useEffect } from "react";
import HoneyCard from "./../Cards/HoneyCardHome";

const YouMightAlsoLike = () => {
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
      <h2 className="text-2xl font-bold  text-gray-950">You Might Also Like</h2>

      <div className="mt-6 flex flex-wrap justify-center gap-4 lg:gap-6">
        {honeyItems.map((item, index) => (
          <HoneyCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default YouMightAlsoLike;
