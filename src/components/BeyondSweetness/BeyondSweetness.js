"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const statsData = [
  {
    percentage: 63,
    title: "Local Beekeepers Empowered",
    desc: "Supporting sustainable livelihoods through ethical sourcing",
  },
  {
    percentage: 75,
    title: "Less Plastic Waste",
    desc: "Eco-friendly packaging reduces our footprint with every jar",
  },
  {
    percentage: 90,
    title: "Community Wellness Boost",
    desc: "Pure honey supports immunity, energy, and better living",
  },
  {
    percentage: 55,
    title: "Driven by Local Women",
    desc: "Creating income and independence for rural women",
  },
];

export default function BeyondSweetness() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) {
      setCounts(statsData.map(() => 0));
      return;
    }

    const intervals = statsData.map((item, index) => {
      const duration = 3000;
      const increment = item.percentage / (duration / 30);

      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < item.percentage) {
            newCounts[index] = Math.min(
              item.percentage,
              newCounts[index] + increment
            );
          }
          return newCounts;
        });
      }, 30);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center text-center font-figtree bg-white pt-5"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-950">
        Beyond Sweetness,
      </h2>
      <p className="text-2xl sm:text-3xl font-extrabold italic text-gray-900 mt-1">
        Real Impact
      </p>

      <div className="relative px-5 mt-10 flex flex-col items-center w-full max-w-5xl ">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-10 sm:gap-16 w-full justify-items-center">
          {statsData.slice(0, 2).map((item, i) => (
            <div key={i} className="flex flex-col items-center max-w-[260px]">
              <h3 className="text-5xl font-extrabold bg-linear-to-r from-[#EAA49D] to-[#E56A5C] bg-clip-text text-transparent">
                {Math.round(counts[i])}%
              </h3>
              <p className="mt-2 text-lg font-bold text-gray-900">
                {item.title}
              </p>
              <p className="text-sm text-gray-900 font-normal mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Image
            src="/productImages/beyondSweetness.png"
            alt="Honey Jar"
            width={234}
            height={218}
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-10 sm:gap-16 w-full justify-items-center">
          {statsData.slice(2).map((item, i) => (
            <div
              key={i + 2}
              className="flex flex-col items-center max-w-[260px]"
            >
              <h3 className="text-5xl font-extrabold bg-linear-to-r from-[#EAA49D] to-[#E56A5C] bg-clip-text text-transparent">
                {Math.round(counts[i + 2])}%
              </h3>
              <p className="mt-2 text-lg font-bold text-gray-900">
                {item.title}
              </p>
              <p className="text-sm text-gray-900 font-normal mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-4 py-2 sm:grid-cols-4 gap-8 bg-[#F1A79E] w-full max-w-4xl justify-items-center">
        {[
          {
            img: "/icons/farm-fresh.png",
            title: "Farm-Fresh Sourcing",
          },
          {
            img: "/icons/bee-friendly.png",
            title: "Bee-Friendly Practices",
          },
          {
            img: "/icons/warm-extraction.png",
            title: "Warm Extraction",
          },
          {
            img: "/icons/pureuntouched.png",
            title: "Pure & Untouched",
          },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <Image
              src={item.img}
              alt={item.title}
              width={50}
              height={50}
              className="object-contain"
            />
            <p className="mt-3 text-xs sm:text-base font-medium text-gray-900">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
