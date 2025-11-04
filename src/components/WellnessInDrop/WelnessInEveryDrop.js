"use client";

import React, { useRef } from "react";

import WellnessDropCard from "./../Cards/WellnessDropCard";

const cards = [
  {
    title: "Harvest at Peak Nectar Flow",
    description:
      "We handpick farms, free from pesticides and insecticides for beehive colonies nationwide.",
    image: "/wellnessImages/harvest.png",
  },
  {
    title: "Precision-Heated for Clean Separation",
    description:
      "We use carefully regulated heat to extract honey smoothly while preserving its natural character and quality.",
    image: "/wellnessImages/precision.png",
  },
  {
    title: "Filtered Without Processing",
    description:
      "Natural filtration removes impurities while keeping all the original nutrients intact.",
    image: "/wellnessImages/purity.png",
  },
];

const WelnessInEveryDrop = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo =
      direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col font-figtree items-center py-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-950 text-center">
        Wellness in Every <span className="text-[#E56A5C] italic">Drop</span>
      </h2>
      <p className="text-gray-600/75 text-center max-w-xl mt-2 font-medium px-4">
        Just honey - no syrups, no preservatives, no processing, no hidden
        ingredients.
      </p>

      <div className="relative w-full mt-10">
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          ◀
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide "
        >
          {cards.map((card, i) => (
            <WellnessDropCard
              key={i}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default WelnessInEveryDrop;
