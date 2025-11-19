import React from "react";
import Image from "next/image";

import AccordionItem from "./../Accordian/AccordianProductDetails";

function PureTestedFeatureAndDetails() {
  return (
    <div className="w-full max-w-3xl px-8 font-figtree mx-auto my-10">
      <div className="flex flex-row justify-between items-center mb-8">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/icons/pure.png"
            alt="pure"
            width={49}
            height={49}
            className="w-10 h-10 object-contain"
          />
          <p className="font-semibold text-gray-600 text-lg mt-2">
            Pure & <br /> Real
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image
            src="/icons/lab-tested.png"
            alt="lab tested"
            width={49}
            height={49}
            className="w-10 h-10 object-contain"
          />
          <p className="font-semibold text-gray-600 text-lg mt-2">
            Lab Tested <br /> For Purity
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image
            src="/icons/plast.png"
            alt="plastic free"
            width={49}
            height={49}
            className="w-10 h-10 object-contain"
          />
          <p className="font-semibold text-gray-600 text-lg mt-2">
            Plastic- <br /> Free
          </p>
        </div>
      </div>

      <AccordionItem title="Product Description">
        <p>
          This product is made with the highest quality natural ingredients.
        </p>
      </AccordionItem>

      <AccordionItem title="Directions For Use">
        <p>Use 1 spoon daily or as recommended.</p>
      </AccordionItem>

      <AccordionItem title="Ingredients">
        <p>• 100% Pure Honey • No additives • No preservatives</p>
      </AccordionItem>

      <AccordionItem title="Is this honey raw or processed?">
        <p>
          Our honey is gently warmed only to remove natural impurities while
          keeping nutrients, enzymes, and antioxidants fully intact.
        </p>
      </AccordionItem>
    </div>
  );
}

export default PureTestedFeatureAndDetails;
