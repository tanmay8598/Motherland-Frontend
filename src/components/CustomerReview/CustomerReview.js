"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomerRatingCard from "../Cards/CustomerRatingCard";
import Pagination from "../Pagination/Pagination";

function CustomerReview() {
  const reviews = [
    {
      name: "Shelley doe",
      date: "October 11, 2024",
      rating: 5,
      title: "More confidence",
      review:
        "I noticed a huge difference when taking this product in my confidence. I felt much more at ease in my relationship and my boyfriend noticed the difference as well.",
      response:
        "Hi Shelley, we love hearing how URO has made such a positive difference for you. Thanks for sharing!",
    },
    {
      name: "Veronica",
      date: "September 27, 2024",
      rating: 5,
      title: "90%",
      review:
        "I never believe in products and never believed in the reviews but this product is no lie and worth it. I even subscribed when I ordered the 2nd bottle so it is 100%. My guy loves it too even though there where no issues before but now all I gots to say is ",
      response:
        "Hi Veronica, we’re so glad that URO is meeting your expectations. Thanks for letting us know!",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10 font-figtree">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1">
            Customer Reviews
          </h2>

          <div className="flex items-center gap-3">
            <p className="text-4xl font-bold">4.8</p>

            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  src="/icons/rating-star.png"
                  alt="star"
                  width={22}
                  height={22}
                />
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-1">2838 Reviews</p>
        </div>

        <div className=" w-full lg:w-[350px]">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-3">
              <p className="w-10 text-sm font-semibold">{rating} Star</p>

              <div className="flex-1 bg-[#E5E5E5]  h-3 relative overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-3 bg-[#FAA943] `}
                  style={{
                    width:
                      rating === 5
                        ? "85%"
                        : rating === 4
                        ? "50%"
                        : rating === 3
                        ? "20%"
                        : "5%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-8">
        {reviews.map((r, i) => (
          <CustomerRatingCard key={i} {...r} />
        ))}
      </div>

      {/* <div className="flex justify-center items-center gap-2 mt-6 text-gray-700">
        <Pagination
          currentPage={page}
          totalPages={7}
          onPageChange={(p) => setPage(p)}
        />
      </div> */}

      <div className="flex justify-center mt-8">
        <button className="bg-[#E56A5C] text-white px-8 py-3 rounded-[10px] font-semibold  transition-all">
          Leave a Review
        </button>
      </div>
    </div>
  );
}

export default CustomerReview;
