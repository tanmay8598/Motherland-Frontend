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

export default function Certifications() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="w-full bg-white py-5 flex flex-col items-center font-figtree overflow-hidden">
      <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
        Certifications
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee">
          {/* Duplicate ×2 only  */}
          {[...certifications, ...certifications].map((item, index) => (
            <div
              key={index}
              className="w-[120px] lg:w-[180px] flex items-center justify-center mx-4"
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
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </section>
  );
}
