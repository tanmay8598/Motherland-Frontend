"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { animate } from "framer-motion";

import CustomerReviewCard from "./../Cards/CustomerReviewCard";

const reviews = [
  {
    name: "Arvind Patel",
    review:
      "I started replacing sugar with this honey for my morning warm water. Within a few weeks I noticed lighter digestion and no acidity. Worth the price!",
    rating: 5,
    product: "Orange Zest Honey",
    image: "/wellnessImages/harvest.png",
    price: 549,
    oldPrice: 699,
  },
  {
    name: "Ritu Sharma",
    review:
      "This honey tastes so pure and natural! No chemical aftertaste at all. Even my kids love it with milk and toast.",
    rating: 5,
    product: "Wild Forest Honey",
    image: "/wellnessImages/precision.png",
    price: 599,
    oldPrice: 749,
  },
  {
    name: "Aman Verma",
    review:
      "Finally found honey that feels genuine. The packaging, taste, and texture all show real quality. Highly recommend!",
    rating: 4,
    product: "Himalayan Raw Honey",
    image: "/wellnessImages/purity.png",
    price: 629,
    oldPrice: 799,
  },
  {
    name: "Aman Verma",
    review:
      "Finally found honey that feels genuine. The packaging, taste, and texture all show real quality. Highly recommend!",
    rating: 4,
    product: "Himalayan Raw Honey",
    image: "/wellnessImages/purity.png",
    price: 629,
    oldPrice: 799,
  },
  {
    name: "Aman Verma",
    review:
      "Finally found honey that feels genuine. The packaging, taste, and texture all show real quality. Highly recommend!",
    rating: 4,
    product: "Himalayan Raw Honey",
    image: "/wellnessImages/purity.png",
    price: 629,
    oldPrice: 799,
  },
];

const WhatOurCustomerSays = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const start = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.firstChild?.offsetWidth || 300;
    const target =
      direction === "left" ? start - cardWidth - 24 : start + cardWidth + 24;

    const controls = animate(start, target, {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        scrollRef.current.scrollLeft = value;
      },
    });

    return () => controls.stop();
  };

  return (
    <section className="flex flex-col font-figtree items-center  py-10 bg-[#FFF5E6]">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-950 text-center">
        What Our Customers Say
      </h2>

      {/* <div className="relative lg:max-w-6xl w-full  mt-10">
        <button
          onClick={() => scroll("left")}
          className="flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2   rounded-full   z-10"
        >
          <Image
            src="/icons/left-arrow.png"
            alt="Previous"
            width={35}
            height={35}
            className="object-contain"
          />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide px-6 snap-x snap-mandatory "
          style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
        >
          {reviews.map((item, i) => (
            <CustomerReviewCard key={i} {...item} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full z-10"
        >
          <Image
            src="/icons/right-arrow.png"
            alt="Next"
            width={35}
            height={35}
            className="object-contain"
          />
        </button>
      </div> */}

      <div className="relative w-full lg:max-w-5xl mx-auto mt-10 flex items-center justify-center">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 lg:-left-10 top-1/2 -translate-y-1/2 cursor-pointer  p-2 transition z-10"
        >
          <Image
            src="/icons/left-arrow.png"
            alt="Previous"
            width={28}
            height={28}
            className="object-contain"
          />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide px-6 snap-x snap-mandatory"
          style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
        >
          {reviews.map((item, i) => (
            <CustomerReviewCard key={i} {...item} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 lg:-right-10 top-1/2 -translate-y-1/2 cursor-pointer p-2 transition z-10"
        >
          <Image
            src="/icons/right-arrow.png"
            alt="Next"
            width={28}
            height={28}
            className="object-contain"
          />
        </button>
      </div>
    </section>
  );
};

export default WhatOurCustomerSays;
