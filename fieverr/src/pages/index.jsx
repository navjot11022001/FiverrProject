import AuthWrapper from "@/components/AuthWrapper";
import Comapnies from "@/components/Landing/Companies";
import Everything from "@/components/Landing/Everything";
import FiverBuisness from "@/components/Landing/FiverBuisness";
import HeroBanner from "@/components/Landing/HeroBanner";
import JoinFiver from "@/components/Landing/JoinFiver";
import PopularService from "@/components/Landing/PopularService";
import Services from "@/components/Landing/Services";
import React from "react";

const Index = () => {
  return (
    <div>
      <HeroBanner />
      <Comapnies />
      <PopularService />
      <Everything />
      <Services />
      <FiverBuisness />
      <JoinFiver />
      <AuthWrapper />
    </div>
  );
};

export default Index;
