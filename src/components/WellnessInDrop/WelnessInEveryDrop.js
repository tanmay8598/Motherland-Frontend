"use client";
import React, { useRef, useState, useEffect } from "react";
import WellnessDropCard from "./../Cards/WellnessDropCard";
import CustomProgressBar from "./../ProgressBar/CustomProgressbar";

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
  {
    title: "Filtered Without Processing",
    description:
      "Natural filtration removes impurities while keeping all the original nutrients intact.",
    image: "/wellnessImages/purity.png",
  },
  {
    title: "Filtered Without Processing",
    description:
      "Natural filtration removes impurities while keeping all the original nutrients intact.",
    image: "/wellnessImages/purity.png",
  },
  {
    title: "Filtered Without Processing",
    description:
      "Natural filtration removes impurities while keeping all the original nutrients intact.",
    image: "/wellnessImages/purity.png",
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
  const [scrollProgress, setScrollProgress] = useState(20);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      let progress = (scrollLeft / (scrollWidth - clientWidth)) * 100 || 0;

      progress = Math.max(progress, 20);

      progress = Math.min(progress, 100);

      setScrollProgress(progress);
    };

    const container = scrollRef.current;
    if (container) container.addEventListener("scroll", handleScroll);
    return () =>
      container && container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col font-figtree items-center py-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-950 text-center">
        Wellness in Every <span className="text-[#E56A5C] italic">Drop</span>
      </h2>
      <p className="text-gray-600/75 text-center max-w-xl mt-2 font-medium px-4">
        Just honey - no syrups, no preservatives, no processing, no hidden
        ingredients.
      </p>

      <div className="relative lg:mx-auto lg:max-w-5xl   w-full mt-10">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth  scrollbar-hide snap-x snap-mandatory px-4"
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
      </div>

      {cards.length > 1 && (
        <div className="lg:hidden">
          <CustomProgressBar progress={scrollProgress} />
        </div>
      )}
    </section>
  );
};

export default WelnessInEveryDrop;
