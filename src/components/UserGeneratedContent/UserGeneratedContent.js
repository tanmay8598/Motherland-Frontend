"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import CustomProgressBar from "./../ProgressBar/CustomProgressbar";

const products = [
  {
    id: 1,
    name: "Orange Zest Honey",
    price: 549,
    oldPrice: 699,
    image: "/productImages/userGenerated1.png",
    subImage: "/productImages/userGeneratedSubImage.png",
  },
  {
    id: 2,
    name: "Wild Forest Honey",
    price: 599,
    oldPrice: 749,
    image: "/productImages/userGenerated2.png",
    subImage: "/productImages/userGeneratedSubImage.png",
  },
  {
    id: 3,
    name: "Wild Forest Honey",
    price: 599,
    oldPrice: 749,
    image: "/productImages/userGenerated2.png",
    subImage: "/productImages/userGeneratedSubImage.png",
  },
];

const UserGeneratedContent = () => {
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
    <section className="bg-[#FFFAF0] py-5 lg:py-0 font-figtree">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto lg:justify-center scroll-smooth scrollbar-hide gap-6 px-8 mt-10 snap-x snap-mandatory"
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="min-w-[290px] md:min-w-[340px] min:h-[480px]  rounded-xl overflow-hidden shadow-lg relative snap-center"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={290}
              height={480}
              className="object-cover w-full h-full"
            />

            <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-black/90 to-transparent"></div>

            <div className="absolute  bottom-4 left-4 flex items-center gap-3">
              <div className="w-[60px] h-[60px] ">
                <Image
                  src={item.subImage}
                  alt="Product"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-white text-lg font-semibold leading-tight">
                  {item.name}
                </p>
                <div className="flex gap-2 text-white/90 text-sm">
                  <span className="line-through">₹{item.oldPrice}</span>
                  <span className="font-bold text-sm text-white">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length > 1 && <CustomProgressBar progress={scrollProgress} />}

      <div className="hidden mt-10 lg:grid grid-cols-4 py-2 sm:grid-cols-4 gap-8 bg-[#F1A79E] w-full lg:px-20 justify-items-center">
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
          <div
            key={i}
            className="flex flex-col lg:px-20 items-center text-center"
          >
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
};

export default UserGeneratedContent;
