"use client";
import { useState } from "react";
import Image from "next/image";

export default function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b font-figtree border-[#0000001A] py-4 cursor-pointer select-none">
      <div
        className="flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-p2-mobile font-bold text-gray-700">{title}</h3>

        <Image
          src={open ? "/icons/chevron-up.png" : "/icons/haha.png"}
          alt="toggle"
          width={13}
          height={9}
          className="w-3 h-2 object-contain"
        />
      </div>

      {open && (
        <div className="mt-3 text-[#1A3232] text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
