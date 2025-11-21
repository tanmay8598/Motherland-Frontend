"use client";
import React, { useState } from "react";
import Image from "next/image";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-xl px-5 py-4  border border-[#EDCD92] font-figtree cursor-pointer transition-all"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold text-[#1A3232]">{question}</p>

        <Image
          src={open ? "/icons/icon-up.png" : "/icons/icon-down.png"}
          alt="toggle"
          width={13}
          height={9}
          className="w-3 h-2 object-contain"
        />
      </div>

      {open && (
        <p className="mt-3 text-[#1A3232] text-sm font-normal leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      q: "Is this honey raw or processed?",
      a: "Our honey is gently warmed only to remove natural impurities while keeping nutrients, enzymes, and antioxidants intact.",
    },
    {
      q: "Does the honey crystallize?",
      a: "Yes, natural honey crystallizes over time. You can warm the bottle gently to liquify it again.",
    },
    {
      q: "Is this honey free from additives or sugar?",
      a: "Absolutely. Our honey contains no additives, preservatives, or added sugar.",
    },
    {
      q: "Where is the honey sourced from?",
      a: "Our honey is responsibly sourced from trusted beekeepers across India.",
    },
    {
      q: "How should I store the honey?",
      a: "Store at room temperature in a cool, dry place away from direct sunlight.",
    },
    {
      q: "Is the packaging eco-friendly?",
      a: "Yes, our bottles are recyclable and responsibly packed to minimize environmental impact.",
    },
  ];

  return (
    <div className="w-full   mx-auto px-5 bg-[#FFF9F2]  py-10 font-figtree">
      <div className="max-w-3xl mx-auto ">
        <h2 className="text-center text-2xl font-bold mb-8">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => (
            <FAQItem key={index} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </div>
  );
}
