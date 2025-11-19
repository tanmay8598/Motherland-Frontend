"use client";
import React, { useState } from "react";
import Image from "next/image";

import CustomerRatingCard from "./../Cards/CustomerRatingCard";
import Pagination from "./../Pagination/Pagination";

function CustomerReview() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const reviews = [
    {
      name: "Shelley",
      date: "October 11, 2024",
      rating: 5,
      title: "More confidence",
      review:
        "I noticed a huge difference when taking this product in my confidence. I felt much more at ease in my relationship and my boyfriend noticed the difference as well.",
    },
    {
      name: "Veronica",
      date: "September 27, 2024",
      rating: 5,
      title: "100%",
      review:
        "I never believe in products and never believed in the reviews but this product is no lie and worth it. I even subscribed when I ordered the 2nd bottle so it is 100%.",
    },
  ];

  const filtered = reviews.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.review.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-2xl mx-auto px-3 py-5 font-figtree">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Customer Reviews
      </h2>

      <div className="flex items-center gap-2">
        <p className="text-4xl font-bold">4.8</p>
        <div className="flex gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src="/icons/filled-star.png"
              alt="star"
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4">0000 Reviews</p>

      <div className="space-y-2 mb-6">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center gap-3">
            <p className="w-10 text-sm font-semibold">{rating} Star</p>

            <div className="flex-1 bg-gray-300 rounded-full h-2 relative">
              <div
                className="absolute left-0 top-0 h-2 bg-orange-400 rounded-full"
                style={{ width: rating === 5 ? "80%" : "40%" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mb-5">
        <div className="flex items-center gap-2 bg-white border px-4 py-2 rounded-full shadow-sm">
          <Image
            src="/icons/search.png"
            alt="search"
            width={18}
            height={18}
            className="opacity-60"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div> */}

      <div className="flex flex-col gap-5">
        {filtered.map((r, i) => (
          <CustomerRatingCard key={i} {...r} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-6 text-gray-700">
        <Pagination
          currentPage={page}
          totalPages={7}
          onPageChange={(p) => setPage(p)}
        />
      </div>

      <div className="flex justify-center mt-5">
        <button className="bg-[#26463B] text-white px-6 py-3 rounded-full font-semibold  transition-all">
          Write a Review
        </button>
      </div>
    </div>
  );
}

export default CustomerReview;
