import React from "react";
import ProductImageViewer from "./../../components/ProductImageViewer/ProductImageViewer";
import ProductDetails from "./../../components/ProductDetails/ProductDetails";

import YouMightAlsoLike from "./../../components/YouMightAlsoLike/YouMightAlsoLike";
import PureTestedFeatureAndDetails from "../../components/PureTestedFeature/PureTestedFeatureAndDetails";
import FAQ from "./../../components/faq/faq";
import CustomerReview from "./../../components/CustomerReview/CustomerReview";

function page() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <ProductImageViewer />
        <ProductDetails />
      </div>
      <PureTestedFeatureAndDetails />
      <YouMightAlsoLike />
      <CustomerReview />
      <FAQ />
    </div>
  );
}

export default page;
