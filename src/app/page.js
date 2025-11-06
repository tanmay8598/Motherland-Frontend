import HeroBanner from "./../components/HeroBanner/HeroBanner";
import FeatureStrip from "./../components/FeatureStrip/FeatureStrip";
import HoneyProductsHome from "./../components/HoneyProducts/HoneyProductsHome";
import WhyChooseMotherland from "./../components/WhyChooseMotherland/WhyChooseMotherland";
import Certifications from "./../components/Certifications/Certifications";
import RegularVsMotherland from "./../components/RegularVsMotherland/RegularVsMotherland";
import WelnessInEveryDrop from "./../components/WellnessInDrop/WelnessInEveryDrop";
import WhatOurCustomerSays from "./../components/WhatCustomerSays/WhatOurCustomerSays";
import UserGeneratedContent from "./../components/UserGeneratedContent/UserGeneratedContent";
import BeyondSweetness from "./../components/BeyondSweetness/BeyondSweetness";
import ShopByConcern from "./../components/ShopByConcern/ShopByConcern";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeatureStrip />
      <ShopByConcern />
      <HoneyProductsHome />
      <WhyChooseMotherland />
      <Certifications />
      <RegularVsMotherland />
      <WelnessInEveryDrop />
      <WhatOurCustomerSays />
      <UserGeneratedContent />
      <BeyondSweetness />
    </>
  );
}
