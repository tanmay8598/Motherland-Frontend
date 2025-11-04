"use client";
import React from "react";
import Image from "next/image";

const certifications = [
  { src: "/certificationImages/iso.png", alt: "ISO 22000:2018" },
  { src: "/certificationImages/gmp.png", alt: "GMP Quality" },
  { src: "/certificationImages/fda.png", alt: "FDA Registered" },
  { src: "/certificationImages/haccp.png", alt: "HACCP Certified" },
  { src: "/certificationImages/isoold.png", alt: "ISO 9001:2015" },
];

const Certifications = () => {
  return (
    <section className="w-full bg-white py-5 flex flex-col items-center font-figtree">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>

      <div
        className="flex overflow-x-auto px-2 scrollbar-hide w-full"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {certifications.map((item, index) => (
          <div
            key={index}
            className="min-w-[140px] shrink-0 flex items-center justify-center scroll-snap-align-center"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={94}
              height={94}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
