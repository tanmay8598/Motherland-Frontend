"use client";
import { useState } from "react";
import Image from "next/image";

const ProductDetails = ({ rating = 4.6 }) => {
  const [qty, setQty] = useState(1);
  const increment = () => setQty(qty + 1);
  const decrement = () => qty > 1 && setQty(qty - 1);

  const variants = [
    {
      id: 1,
      price: "₹550",
      oldPrice: "₹670",
      weight: "250 g",
      save: "120",
    },
    {
      id: 2,
      price: "₹1000",
      oldPrice: "₹1200",
      weight: "500 g",
      save: "200",
    },
    {
      id: 3,
      price: "₹2,799",
      oldPrice: "₹3,299",
      weight: "Asorted",
      save: "300",
    },
  ];

  const [selectedVariant, setSelectedVariant] = useState(1);

  const totalStars = 5;

  const renderStars = () => {
    const stars = [];
    let remaining = rating;

    for (let i = 0; i < totalStars; i++) {
      if (remaining >= 1) {
        stars.push(
          <Image
            key={i}
            src="/icons/filled-star.png"
            alt="star"
            width={18}
            height={18}
          />
        );
      } else if (remaining >= 0.5) {
        stars.push(
          <Image
            key={i}
            src="/icons/half-star.png"
            alt="half-star"
            width={18}
            height={18}
          />
        );
      } else {
        stars.push(
          <Image
            key={i}
            src="/icons/empty-star.png"
            alt="empty-star"
            width={18}
            height={18}
          />
        );
      }
      remaining -= 1;
    }
    return stars;
  };

  return (
    <div className="w-full flex font-figtree my-5  justify-center">
      <div className="w-full max-w-md px-4 text-left">
        <h2 className="text-2xl font-bold my-2 ">Jamun Honey</h2>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">{renderStars()}</div>

          <span className="text-[17px] font-semibold text-[#1A3232]">
            {rating}
          </span>

          <span className="ml-2 px-3 py-0.5 border border-black/20 rounded-full text-sm font-medium text-[#101010]">
            {"999"} reviews
          </span>
        </div>
        <div className=" my-2 ">
          <p className="font-semibold flex flex-row items-center gap-2 text-xl text-[#E56B5D] ">
            <span className="line-through"> ₹670</span>{" "}
            <span className="font-semibold text-3xl text-gray-700">₹550</span>
          </p>
        </div>

        <h5 className="font-semibold text-gray-700 text-lg">Select a size</h5>
        {/* <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="border border-[#BE502A] rounded-xl w-full p-2 text-center shadow-sm relative">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#BE502A] text-white text-xs px-2 py-0.5 rounded-full">
              Save ₹ 120
            </span>
            <p className="font-bold text-lg">₹550</p>
            <p className="text-gray-500 line-through text-sm">₹670</p>
            <p className="mt-1 text-sm font-medium">250 g</p>
          </div>

          <div className="border rounded-xl p-3 text-center shadow-sm relative">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#BE502A] text-white text-xs px-2 py-0.5 rounded-full">
              Save ₹ 200
            </span>
            <p className="font-bold text-lg">₹1000</p>
            <p className="text-gray-500 line-through text-sm">₹1200</p>
            <p className="mt-1 text-sm font-medium">500 g</p>
          </div>

          <div className="border rounded-xl p-3 text-center shadow-sm relative">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#BE502A] text-white text-xs px-2 py-0.5 rounded-full">
              Save ₹ 300
            </span>
            <p className="font-bold text-lg">₹2,799</p>
            <p className="text-gray-500 line-through text-sm">₹3,299</p>
            <p className="mt-1 text-sm font-medium">Asorted</p>
          </div>
        </div> */}

        <div className="mt-6 grid grid-cols-3 gap-4">
          {variants.map((v) => {
            const active = v.id === selectedVariant;
            return (
              <div
                key={v.id}
                onClick={() => setSelectedVariant(v.id)}
                className={`relative rounded-2xl pt-6 pb-3 px-3 text-center cursor-pointer transition-all duration-200 shadow-sm border 
                  ${
                    active
                      ? "bg-[#FFF3EB] border-[#E26D5A]"
                      : "bg-white border-gray-300"
                  }
                `}
              >
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full shadow-sm
                    ${
                      active
                        ? "bg-[#E26D5A] text-white"
                        : "bg-[#EFEFEF] text-black"
                    }
                  `}
                >
                  Save ₹ {v.save}
                </span>

                <p className="font-semibold text-xl">{v.price}</p>
                <p className="text-gray-500 line-through text-sm mt-0.5">
                  {v.oldPrice}
                </p>

                <div
                  className={`mt-3 mx-auto rounded-full px-4 py-1 text-sm font-medium w-fit
                    ${
                      active
                        ? "border border-[#E26D5A] bg-white"
                        : "border border-gray-300 bg-white"
                    }
                  `}
                >
                  {v.weight}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-5 font-normal text-p2-mobile text-gray-700 leading-6">
          Sourced from the wild forest blooms of Uttarakhand, the honey is
          gently warmed, just enough to remove natural impurities while
          preserving all its nutrients, enzymes, and authentic flavor. With no
          additives or processing, it retains its authentic aroma and dense
          golden texture.
        </p>

        <ul className="mt-5 space-y-3 text-sm font-medium">
          <li className="flex items-center gap-4 text-p2-mobile font-normal text-black">
            <Image src="/icons/drop.png" width={18} height={18} alt="drop" />
            Unprocessed
          </li>
          <li className="flex items-center gap-4 text-p2-mobile font-normal text-black">
            <Image src="/icons/drop.png" width={18} height={18} alt="drop" />
            Unprocessed
          </li>
          <li className="flex items-center gap-4 text-p2-mobile font-normal text-black">
            <Image
              src="/icons/drop.png"
              width={18}
              height={18}
              alt="lab tested"
            />
            Lab-tested purity
          </li>
          <li className="flex items-center gap-4 text-p2-mobile font-normal text-black">
            <Image
              src="/icons/drop.png"
              width={18}
              height={18}
              alt="no sugar"
            />
            No added sugar
          </li>
        </ul>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FFF6E5] flex items-center justify-center">
              <Image
                src="/icons/immunity.png"
                alt="Boosts Immunity"
                width={28}
                height={28}
              />
            </div>
            <p className="text-sm text-gray-700 leading-4">
              <span className="font-semibold text-gray-700">Boosts</span>
              <br />
              <span className="font-semibold text-gray-700">Immunity</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FFF6E5] flex items-center justify-center">
              <Image
                src="/icons/diegation.png"
                alt="Supports Digestion"
                width={28}
                height={28}
              />
            </div>
            <p className="text-sm text-gray-700 leading-4">
              <span className="font-semibold text-gray-700">Supports</span>
              <br />
              <span className="font-semibold text-gray-700">Digestion</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FFF6E5] flex items-center justify-center">
              <Image
                src="/icons/hydrates.png"
                alt="Hydrates & Energizes"
                width={28}
                height={28}
              />
            </div>
            <p className="text-sm text-gray-700 leading-4">
              <span className="font-semibold text-gray-700">Hydrates &</span>
              <br />
              <span className="font-semibold text-gray-700">Energizes</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FFF6E5] flex items-center justify-center">
              <Image
                src="/icons/antiox.png"
                alt="Antioxidants"
                width={28}
                height={28}
              />
            </div>
            <p className="text-sm text-gray-700 leading-4">
              <span className="font-semibold text-gray-700">Rich in</span>
              <br />
              <span className="font-semibold text-gray-700">Antioxidants</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mx-auto gap-2 my-4 w-full max-w-sm">
          <div className="text-lg font-semibold text-black">Quantity</div>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 grow ml-3 justify-between">
            <button
              onClick={decrement}
              className="text-xl font-semibold text-gray-700"
            >
              –
            </button>

            <span className="text-lg font-medium">{qty}</span>

            <button
              onClick={increment}
              className="text-xl font-semibold text-gray-700"
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button className="w-full py-3 border-2 border-[#BE502A] text-[#BE502A] rounded-xl font-semibold">
            Add To Cart
          </button>

          <button className="w-full py-3 bg-[#BE502A] text-white rounded-xl font-semibold">
            Buy It Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
