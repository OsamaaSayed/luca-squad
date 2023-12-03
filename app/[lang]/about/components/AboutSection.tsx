import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";

const AboutSection = () => {
  return (
    <div className="flex-1">
      <SectionTitle primaryText="Welcome to " secondaryText=" Luca Squad" />
      <p className="mt-10 bg-[#272727] p-5 text-[18px] font-medium text-white xl:w-[610px] xl:-translate-x-24 xl:mt-3">
        A state-of-the-art construction company with an established reputation
        for excellence and integrity. Founded in Milan, Italy, we are committed
        to the construction industry with an emphasis on precision, innovation
        and customer satisfaction. Every project we undertake reflects our
        dedication to detail and quality, while our decades of experience enable
        us to successfully tackle a wide range of projects, from luxury
        residential complexes to commercial renovations.
      </p>
    </div>
  );
};

export default AboutSection;
