"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const concerns = [
  { id: 1, title: "Immunity", img: "/icons/immunity.png" },
  { id: 2, title: "Digestion", img: "/icons/diegation.png" },
  { id: 3, title: "Skin Glow", img: "/icons/skin-glow.png" },
];

const ShopByConcern = () => {
  return (
    <section className="flex flex-col items-center py-5 font-figtree bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 mb-8">
        Shop By <span className="text-[#E56A5C] italic font-bold">Concern</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {concerns.map((concern) => (
          <motion.div
            key={concern.id}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="w-22 h-22 lg:h-28 lg:w-28 sm:w-[88px] sm:h-[88px] bg-[#FBE6BB99] rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image
                src={concern.img}
                alt={concern.title}
                width={45}
                height={45}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 font-bold lg:text-lg mt-3">
              {concern.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShopByConcern;
