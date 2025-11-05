"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

const certifications = [
  { src: "/certificationImages/iso.png", alt: "ISO 22000:2018" },
  { src: "/certificationImages/gmp.png", alt: "GMP Quality" },
  { src: "/certificationImages/fda.png", alt: "FDA Registered" },
  { src: "/certificationImages/haccp.png", alt: "HACCP Certified" },
  { src: "/certificationImages/isoold.png", alt: "ISO 9001:2015" },
];

const Certifications = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className="w-full bg-white py-5 flex flex-col items-center font-figtree">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>

      <div
        className="flex overflow-x-auto animate-marquee px-2 scrollbar-hide w-full"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {[...certifications, ...certifications].map((item, index) => (
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
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
