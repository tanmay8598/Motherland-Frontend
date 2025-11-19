// "use client";
// import Image from "next/image";
// import React from "react";

// const RegularVsMotherland = () => {
//   return (
//     <section className="w-full flex flex-col items-center py-5 font-figtree">
//       <div className="relative w-full lg:px-10 bg-[#FFE4B5]  flex flex-row items-stretch  overflow-hidden">
//         <div className="w-1/2 px-4 py-8 flex flex-col justify-start relative">
//           <div className="w-fit bg-white rounded-md py-1.5 px-3">
//             <h3 className="text-sm md:text-xl font-bold text-[#0F8643] whitespace-nowrap">
//               Motherland Honey
//             </h3>
//           </div>

//           <ul className="space-y-3 mt-5">
//             {[
//               "Single-origin floral sources",
//               "No added syrups/stabilizers",
//               "Lab-tested & certified for purity",
//               "Traceability from farm to bottle",
//               "Premium glass packaging (no plastic)",
//             ].map((item, index) => (
//               <li key={index} className="flex items-start space-x-2">
//                 <Image
//                   src="/icons/check.png"
//                   alt="check icon"
//                   width={20}
//                   height={20}
//                   className="mt-1"
//                 />
//                 <span className="text-gray-800 font-semibold text-sm md:text-base">
//                   {item}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="relative w-[200px] lg:w-[363px] flex justify-center items-center">
//           <div className="absolute top-0 bottom-0 w-0.5 bg-white"></div>
//           <Image
//             src="/images/comparehoney.png"
//             alt="Honey Center"
//             width={114}
//             height={174}
//             className="z-10 object-contain w-[150px] h-[174px] lg:w-[200px] lg:h-[300px]"
//           />
//         </div>

//         <div className="w-1/2 px-6 py-8 flex flex-col justify-start relative">
//           <div className="w-fit bg-white rounded-md py-1.5 px-3">
//             <h3 className="text-sm md:text-xl font-bold text-[#BA2D2D] whitespace-nowrap">
//               Regular Honey
//             </h3>
//           </div>

//           <ul className="space-y-3 mt-5">
//             {[
//               "Unknown sources",
//               "Often diluted with sugar syrups",
//               "Not transparent about tests",
//               "No transparency of source",
//               "Plastic jars with BPA risk",
//             ].map((item, index) => (
//               <li key={index} className="flex items-start space-x-2">
//                 <Image
//                   src="/icons/cross.png"
//                   alt="cross icon"
//                   width={20}
//                   height={20}
//                   className="mt-1"
//                 />
//                 <span className="text-gray-800 font-semibold text-sm md:text-base">
//                   {item}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RegularVsMotherland;

// working code

"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const ComparisonSlider = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);

  const updatePosition = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    let x = ((clientX - rect.left) / rect.width) * 100;

    if (x < 0) x = 0;
    if (x > 100) x = 100;

    setPosition(x);
  };

  const handleMouseMove = (e) => updatePosition(e.clientX);
  const handleTouchMove = (e) => updatePosition(e.touches[0].clientX);

  const startDrag = () => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDrag);

    // mobile listeners
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", stopDrag);
  };

  const stopDrag = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", stopDrag);

    // remove mobile listeners
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", stopDrag);
  };

  return (
    <section className="w-full flex justify-center font-figtree bg-[#FFF1D9] select-none">
      <div
        ref={containerRef}
        className="relative w-full h-[420px] md:h-[400px] rounded-xl overflow-hidden"
      >
        {/* LEFT SIDE */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <Image
            src="/images/motherlandHoney.png"
            alt="Motherland"
            fill
            className="object-contain p-14 md:p-16"
          />

          <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center px-5 md:px-10">
            <div className="w-fit bg-white rounded-md py-1.5 px-3">
              <h3 className="text-sm md:text-xl font-bold text-[#0F8643] whitespace-nowrap">
                Motherland Honey
              </h3>
            </div>

            <ul className="space-y-2 md:space-y-3 mt-3 md:mt-4">
              {[
                "Single-origin floral sources",
                "No added syrups/stabilizers",
                "Lab-tested & certified for purity",
                "Traceability from farm to bottle",
                "Premium glass packaging (no plastic)",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <Image
                    src="/icons/check.png"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            clipPath: `inset(0 0 0 ${position}%)`,
          }}
        >
          <Image
            src="/images/regularHoney.png"
            alt="Regular Honey"
            fill
            className="object-contain p-14 md:p-16"
          />

          <div className="absolute top-0 right-0 h-full w-full flex flex-col items-end justify-center px-5 md:px-10 text-right">
            <div className="w-fit bg-white rounded-md py-1.5 px-3">
              <h3 className="text-sm md:text-xl font-bold text-[#BA2D2D] whitespace-nowrap">
                Regular Honey
              </h3>
            </div>

            <ul className="space-y-2 md:space-y-3 mt-3 md:mt-4">
              {[
                "Unknown sources",
                "Often diluted with sugar syrups",
                "Not transparent about tests",
                "No transparency of source",
                "Plastic jars with BPA risk",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-center justify-end">
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {item}
                  </span>
                  <Image
                    src="/icons/cross.png"
                    width={20}
                    height={20}
                    alt="cross"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SLIDER HANDLE */}
        <div
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          className="absolute top-0 h-full w-0.5 bg-white cursor-ew-resize z-30"
          style={{ left: `calc(${position}% - 3px)` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-white border border-gray-500 rounded-full shadow-md"></div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSlider;
