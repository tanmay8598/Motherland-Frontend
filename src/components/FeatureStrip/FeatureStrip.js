"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const features = [
  { icon: "/icons/tested.png", label: "THIRD PARTY TESTED" },
  { icon: "/icons/medicinal.png", label: "MEDICINAL PROPERTIES" },
  { icon: "/icons/flavour.png", label: "NO ARTIFICIAL FLAVORS" },
  { icon: "/icons/sustainable.png", label: "SUSTAINABLY SOURCED" },
  { icon: "/icons/organic.png", label: "100% ORGANIC" },
];

const FeatureStrip = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-9 overflow-hidden bg-white flex items-center">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...features, ...features].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mx-6 text-gray-800 whitespace-nowrap"
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-sm font-light font-figtree text-gray-900">
              {item.label}
            </span>
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
    </div>
  );
};
export default FeatureStrip;
